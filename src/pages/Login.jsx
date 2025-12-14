import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      toast.success("Welcome back 🎉");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.msg || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="pt-28 text-center">
      <h1 className="text-3xl font-bold mb-6">Login 🔐</h1>

      <input
        className="border p-3 mb-4 w-80 rounded"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="border p-3 mb-4 w-80 rounded"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-3 rounded w-80"
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
