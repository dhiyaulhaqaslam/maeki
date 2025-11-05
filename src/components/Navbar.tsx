import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/maeki-logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // ✅ untuk deteksi halaman aktif

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi untuk memberi style active
  const isActive = (path: string) =>
    location.pathname === path
      ? "text-[#9C1D2A] underline underline-offset-8 decoration-2"
      : "hover:text-[#9C1D2A] transition";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-md bg-white/40 shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          <img src={logo} alt="Maeki logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav — Ditaruh di Tengah */}
        <div className="hidden md:flex gap-8 font-medium absolute left-1/2 -translate-x-1/2">
          <Link to="/" className={isActive("/")}>
            Beranda
          </Link>
          <Link to="/GIS" className={isActive("/GIS")}>
            GIS
          </Link>
          <Link to="/news" className={isActive("/news")}>
            News
          </Link>
          <Link to="/event" className={isActive("/event")}>
            Event
          </Link>
        </div>

        {/* Tombol Login & Register */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="px-4 py-1.5 rounded-lg border border-[#9C1D2A] text-white bg-[#9C1D2A] hover:bg-[#9C1D2A]/80 transition font-medium"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-1.5 rounded-lg text-[#9C1D2A] hover:bg-[#9C1D2A] border border-[#9C1D2A] hover:text-white transition font-semibold"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none hover:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden flex flex-col items-center text-white py-6 space-y-4 shadow-lg"
        >
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className={`${isActive("/")} block text-lg font-medium`}
          >
            Beranda
          </Link>
          <Link
            to="/GIS"
            onClick={() => setMenuOpen(false)}
            className={`${isActive("/GIS")} block text-lg font-medium`}
          >
            GIS
          </Link>
          <Link
            to="/news"
            onClick={() => setMenuOpen(false)}
            className={`${isActive("/news")} block text-lg font-medium`}
          >
            News
          </Link>
          <Link
            to="/event"
            onClick={() => setMenuOpen(false)}
            className={`${isActive("/event")} block text-lg font-medium`}
          >
            Event
          </Link>

          <hr className="border-[#9C1D2A] w-3/4 mx-auto my-3" />

          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="block w-3/4 text-center py-2 rounded-md bg-[#9C1D2A] text-white font-medium hover:bg-[#9C1D2A]/80 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="block w-3/4 text-center py-2 rounded-md border border-[#9C1D2A] text-[#9C1D2A] font-semibold hover:bg-[#9C1D2A] hover:text-white transition"
          >
            Register
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
