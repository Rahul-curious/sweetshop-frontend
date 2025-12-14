import { useState } from "react";
import api from "../api/axios";
import toast from "react-hot-toast";

export default function AdminAddSweet({ onAdded }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAdd = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/sweets", {
        name,
        price,
        stock,
      });

      toast.success("Sweet added 🍬");

      setName("");
      setPrice("");
      setStock("");
      onAdded();
    } catch (err) {
      toast.error(err.response?.data?.msg || "Failed to add sweet");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleAdd}
      className="bg-white p-6 rounded-xl shadow mb-10 max-w-md mx-auto"
    >
      <h3 className="text-xl font-bold mb-4">Add New Sweet 🍭</h3>

      <input
        className="border p-2 w-full mb-3 rounded"
        placeholder="Sweet name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        className="border p-2 w-full mb-3 rounded"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="number"
        className="border p-2 w-full mb-4 rounded"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />

      <button
        disabled={loading}
        className="bg-green-600 text-white w-full py-2 rounded font-semibold"
      >
        {loading ? "Adding..." : "Add Sweet"}
      </button>
    </form>
  );
}
