// src/components/Footer.tsx
import { motion } from "framer-motion";
import SeraFooter from "./ui/SeraFooter";

export default function Footer() {
    return (
        <div className="relative z-20 bg-linear-to-t from-black via-[#1a0e00] to-black text-gray-300">
            <SeraFooter />

            {/* Info tambahan */}
            <motion.footer
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="border-t border-yellow-900/30 bg-black/80 py-12 text-center backdrop-blur-md relative"
            >
                {/* Ornamen Garis Batik */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-yellow-500 via-red-600 to-yellow-500 animate-pulse" />

                <div className="mx-auto max-w-6xl px-6 space-y-8">
                    <p className="mx-auto max-w-xl text-sm md:text-base text-gray-400 italic">
                        "Menjaga warisan, menenun masa depan."
                        <span className="text-yellow-400"> — Maeki Nusantara</span>
                    </p>

                    {/* Sosial Media */}
                    <div className="flex justify-center gap-8 text-2xl">
                        <a href="#" className="transition hover:text-yellow-400">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#" className="transition hover:text-yellow-400">
                            <i className="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href="#" className="transition hover:text-yellow-400">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="#" className="transition hover:text-yellow-400">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-xs text-gray-500 tracking-wide">
                        © {new Date().getFullYear()}{" "}
                        <span className="font-bold text-yellow-400">Mae</span>ki.
                        Dibuat dengan <span className="text-red-500">❤️</span> & semangat budaya Indonesia.
                    </p>
                </div>

                {/* Ornamen bawah */}
                <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-linear-to-r from-red-600 via-yellow-400 to-red-600"
                />
            </motion.footer>
        </div>
    );
}