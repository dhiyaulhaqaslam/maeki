import { motion } from "framer-motion";
import SeraFooter from "./ui/SeraFooter";

export default function Footer() {
    return (
        <div className="relative z-20 bg-gradient-to-t from-black via-[#1a0e00] to-black text-gray-300">
            <SeraFooter />

            <motion.footer
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="border-t border-yellow-900/30 bg-black/80 py-12 text-center backdrop-blur-md relative"
            >
                {/* Ornamen garis batik */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-500 via-red-600 to-yellow-500 animate-pulse" />

                {/* Ornamen bawah */}
                <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-red-600 via-yellow-400 to-red-600"
                />
            </motion.footer>
        </div>
    );
}
