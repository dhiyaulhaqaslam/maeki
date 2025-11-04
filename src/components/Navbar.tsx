import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/maeki-logo.png"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-md bg-black/60 shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          <img src={logo} alt="" />
        </Link>

        {/* Desktop Nav — Ditaruh di Tengah */}
        <div className="hidden md:flex gap-8 font-medium absolute left-1/2 -translate-x-1/2">
          <Link to="/" className="hover:text-[#9C1D2A] transition">
            Beranda
          </Link>
          <Link to="/GIS" className="hover:text-[#9C1D2A] transition">
            GIS
          </Link>
          <Link to="/news" className="hover:text-[#9C1D2A] transition">
            News
          </Link>
          <Link to="/event" className="hover:text-[#9C1D2A] transition">
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
          className="md:hidden focus:outline-none"
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
          className="md:hidden bg-black/80 backdrop-blur-md text-center text-white py-4 space-y-3"
        >
          <Link to="/" onClick={() => setMenuOpen(false)} className="block">
            Beranda
          </Link>
          <Link to="/GIS" onClick={() => setMenuOpen(false)} className="block">
            GIS
          </Link>
          <Link to="/news" onClick={() => setMenuOpen(false)} className="block">
            News
          </Link>
          <Link to="/event" onClick={() => setMenuOpen(false)} className="block">
            Event
          </Link>
          <hr className="border-gray-600 w-2/3 mx-auto my-3" />
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="block text-[#9C1D2A]"
          >
            Login
          </Link>
          <Link
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="block text-[#9C1D2A] font-semibold"
          >
            Register
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
