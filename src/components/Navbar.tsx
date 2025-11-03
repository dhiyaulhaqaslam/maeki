import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-black/60 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Mae<span className="text-yellow-400">ki</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 font-medium">
          <a href="/" className="hover:text-yellow-400 transition">
            Beranda
          </a>
          <a href="GIS" className="hover:text-yellow-400 transition">
            GIS
          </a>
          <a href="news" className="hover:text-yellow-400 transition">
            News
          </a>
          <a href="event" className="hover:text-yellow-400 transition">
            Event
          </a>
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
          <a href="#hero" onClick={() => setMenuOpen(false)} className="block">
            Beranda
          </a>
          <a
            href="#budaya"
            onClick={() => setMenuOpen(false)}
            className="block"
          >
            Budaya
          </a>
          <a
            href="#warisan"
            onClick={() => setMenuOpen(false)}
            className="block"
          >
            Warisan
          </a>
          <a
            href="#kontak"
            onClick={() => setMenuOpen(false)}
            className="block"
          >
            Kontak
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
