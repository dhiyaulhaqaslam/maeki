import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-20 border-t border-white/10 bg-black/80 py-10 text-center text-gray-300 backdrop-blur-md"
        >
            <div className="mx-auto max-w-6xl px-6">
                {/* Logo dan Nama */}
                <h2 className="mb-3 text-2xl font-semibold">
                    Mae<span className="text-yellow-400">ki</span>
                </h2>

                {/* Deskripsi */}
                <p className="mx-auto mb-6 max-w-xl text-sm">
                    Menjelajahi budaya dan warisan Indonesia dengan sentuhan
                    teknologi modern. Setiap elemen memiliki kisah untuk
                    diceritakan.
                </p>

                {/* Sosial media */}
                <div className="mb-6 flex justify-center gap-6 text-xl">
                    <a
                        href="#"
                        className="transition hover:text-yellow-400"
                        aria-label="Instagram"
                    >
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a
                        href="#"
                        className="transition hover:text-yellow-400"
                        aria-label="Twitter"
                    >
                        <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a
                        href="#"
                        className="transition hover:text-yellow-400"
                        aria-label="GitHub"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-xs text-gray-500">
                    © {new Date().getFullYear()} Mae
                    <span className="text-yellow-400">ki</span>. Dibuat dengan
                    ❤️ oleh tim kreatif.
                </p>
            </div>
        </motion.footer>
    );
}
