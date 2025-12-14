import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      {/* GLOBAL CONTENT OFFSET */}
      <main className="pt-32">
        {/* 👇 PAGE TRANSITION WRAPPER */}
        <div key={location.pathname} className="page-fade">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </main>
    </>
  );
}
