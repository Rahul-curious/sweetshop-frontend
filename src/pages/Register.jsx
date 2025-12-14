import { useState } from "react";
import { registerUser } from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await registerUser(form);
      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Error registering user");
    }
  };

  return (
    <div className="pt-28 flex justify-center">
      <div className="p-10 w-[380px] bg-white/40 backdrop-blur-xl shadow-lg rounded-2xl border border-white/30">
        <h1 className="text-3xl font-bold text-center mb-6">
          Create Account 🎉
        </h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 rounded-lg border"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg border"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-lg border"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button className="mt-3 p-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
