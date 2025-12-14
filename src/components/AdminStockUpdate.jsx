import { useState } from "react";
import api from "../api/axios";
import toast from "react-hot-toast";

export default function AdminStockUpdate({ sweet, refresh }) {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  // safety check
  if (!sweet) return null;

  const handleUpdate = async () => {
    if (!amount || Number(amount) <= 0) {
      toast.error("Enter a valid stock amount");
      return;
    }

    try {
      setLoading(true);

      await api.post(`/sweets/${sweet._id}/restock`, {
        amount: Number(amount),
      });

      toast.success("Stock updated ✅");
      setAmount("");
      refresh();
    } catch (err) {
      toast.error(err.response?.data?.msg || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    const ok = window.confirm(
      `Are you sure you want to delete "${sweet.name}"?`
    );
    if (!ok) return;

    try {
      setLoading(true);
      await api.delete(`/sweets/${sweet._id}`);
      toast.success("Sweet deleted 🗑️");
      refresh();
    } catch (err) {
      toast.error(err.response?.data?.msg || "Delete failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2 mt-3">
      <p className="text-sm font-medium text-gray-600">
        Current stock: <span className="font-bold">{sweet.stock}</span>
      </p>

      <div className="flex gap-2 items-center">
        <input
          type="number"
          min="1"
          className="border p-2 rounded w-24 focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="+Stock"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button
          disabled={loading}
          onClick={handleUpdate}
          className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded disabled:opacity-50"
        >
          Update
        </button>

        <button
          disabled={loading}
          onClick={handleDelete}
          className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded disabled:opacity-50"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
