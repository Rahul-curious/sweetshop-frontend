import { useEffect, useState } from "react";
import api from "../api/axios";
import AdminStockUpdate from "../components/AdminStockUpdate";
import AdminAddSweet from "../components/AdminAddSweet";
import toast from "react-hot-toast";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [sweets, setSweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Load user
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Load sweets initially
  useEffect(() => {
    fetchSweets();
  }, []);

  // Fetch all sweets
  const fetchSweets = async () => {
    try {
      setLoading(true);
      const res = await api.get("/sweets");
      setSweets(res.data);
    } catch {
      toast.error("Failed to load sweets");
    } finally {
      setLoading(false);
    }
  };

  // 🔍 SEARCH SWEETS
  const handleSearch = async (e) => {
    e.preventDefault();

    if (!search.trim()) {
      fetchSweets();
      return;
    }

    try {
      setLoading(true);
      const res = await api.get(`/sweets/search?name=${search}`);
      setSweets(res.data);
    } catch {
      toast.error("Search failed");
    } finally {
      setLoading(false);
    }
  };

  // Buy sweet (user)
  const buySweet = async (id) => {
    try {
      await api.post(`/sweets/${id}/purchase`);
      toast.success("Purchase successful 🎉");
      fetchSweets();
    } catch (err) {
      toast.error(err.response?.data?.msg || "Purchase failed");
    }
  };

  return (
    <div className="pt-112 px-6 max-w-6xl mx-auto">

      {/* USER INFO */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-2">Dashboard 🎛️</h1>
        {user && (
          <>
            <p><strong>Email:</strong> {user.email}</p>
            <p>
              <strong>Role:</strong>{" "}
              <span className="text-blue-600 font-semibold">{user.role}</span>
            </p>
          </>
        )}
      </div>

      {/* ADMIN ADD SWEET */}
      {user?.role === "admin" && (
        <AdminAddSweet onAdded={fetchSweets} />
      )}

      {/* 🔍 SEARCH BAR */}
      <form
        onSubmit={handleSearch}
        className="flex gap-3 mb-8 max-w-md mx-auto"
      >
        <input
          className="border p-3 rounded w-full"
          placeholder="Search sweet by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-purple-600 text-white px-4 rounded font-semibold"
        >
          Search
        </button>
      </form>

      {/* SWEETS */}
      <h2 className="text-2xl font-bold mb-6">Available Sweets 🍬</h2>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : sweets.length === 0 ? (
        <p className="text-center">No sweets found</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sweets.map((sweet) => (
            <div
              key={sweet._id}
              className="p-5 rounded-xl shadow bg-white flex flex-col gap-3"
            >
              <h3 className="text-xl font-bold">{sweet.name}</h3>
              <p>Price: ₹{sweet.price}</p>
              <p>Stock: {sweet.stock}</p>

              {/* USER BUY */}
              {user?.role === "user" && (
                <button
                  disabled={sweet.stock === 0}
                  onClick={() => buySweet(sweet._id)}
                  className={`px-4 py-2 rounded text-white font-semibold
                    ${
                      sweet.stock === 0
                        ? "bg-gray-400"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                >
                  {sweet.stock === 0 ? "Out of Stock" : "Buy 1"}
                </button>
              )}

              {/* ADMIN UPDATE + DELETE */}
              {user?.role === "admin" && (
                <AdminStockUpdate
                  sweet={sweet}
                  refresh={fetchSweets}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
