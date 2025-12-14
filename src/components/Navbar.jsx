import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // LOGOUT
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  // SCROLL BEHAVIOR
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true); // scroll down → hide
      } else {
        setHidden(false); // scroll up → show
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItem = (path, label) => (
    <Link
      to={path}
      className={`
        relative px-4 py-2 rounded-full transition-all duration-300
        ${
          location.pathname === path
            ? "bg-white/10 text-purple-300 shadow-inner"
            : "text-gray-300 hover:text-white hover:bg-white/5"
        }
      `}
    >
      {label}
    </Link>
  );

  return (
    <nav
      className={`
        glass-navbar fixed top-4 left-1/2 -translate-x-1/2
        w-[95%] max-w-6xl z-50 px-6
        transition-all duration-500 ease-in-out
        ${hidden ? "-translate-y-24 scale-95 opacity-80" : "translate-y-0 scale-100 opacity-100"}
      `}
    >
      <div
        className="
          flex items-center justify-between
          px-8 py-4 rounded-2xl
          backdrop-blur-xl bg-white/5
          border border-white/10
          shadow-[0_0_40px_rgba(168,85,247,0.15)]
        "
      >
        {/* LOGO */}
        <Link
          to="/"
          className="text-xl font-bold tracking-wide bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          🍬 SweetShop
        </Link>

        {/* LINKS */}
        <div className="flex items-center gap-3 text-sm">
          {!token && (
            <>
              {navItem("/", "Home")}
              {navItem("/login", "Login")}
              {navItem("/register", "Register")}
            </>
          )}

          {token && (
            <>
              {navItem("/", "Home")}
              {navItem("/dashboard", "Dashboard")}
              <button
                onClick={handleLogout}
                className="ml-3 px-4 py-2 rounded-full text-red-400 hover:bg-red-500/10 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
