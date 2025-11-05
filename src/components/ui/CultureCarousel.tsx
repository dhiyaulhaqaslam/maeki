import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import borobudur from "../../assets/bg/borobudur.png";
import prambanan from "../../assets/bg/prambanan.png";
import tongkonan from "../../assets/bg/Tongkonan.png";
import honai from "../../assets/bg/honai.png";
import ulundanu from "../../assets/bg/ulundanu.png";
import bolon from "../../assets/bg/bolon.png";

const images = [
    {
        src: borobudur,
        title: "Candi Borobudur",
        desc: "Warisan dunia yang menjadi simbol kemegahan dan spiritualitas Nusantara.",
    },
    {
        src: prambanan,
        title: "Candi Prambanan",
        desc: "Kisah cinta dan legenda dalam keindahan arsitektur Hindu klasik.",
    },
    {
        src: tongkonan,
        title: "Tongkonan Toraja",
        desc: "Rumah adat yang menjadi simbol kehormatan dan kebersamaan masyarakat Toraja.",
    },
    {
        src: honai,
        title: "Rumah Adat Papua",
        desc: "Rumah tradisional Suku Dani, terutama di daerah pegunungan.",
    },
    {
        src: ulundanu,
        title: "Pura Ulun Danu",
        desc: "Harmoni antara tradisi, alam, dan seni dalam kehidupan masyarakat Bali.",
    },
    {
        src: bolon,
        title: "Rumah Adat Batak",
        desc: "Simbol identitas suku Batak sebagai pusat aktivitas sosial, budaya, dan ritual adat.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.04, delayChildren: 0.2 },
    },
};

const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function CultureCarousel() {
    const [index, setIndex] = useState(0);

    // Ganti slide otomatis tiap 6 detik
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Gambar */}
            <AnimatePresence mode="wait">
                <motion.img
                    key={images[index].src}
                    src={images[index].src}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full object-cover brightness-[0.7]"
                />
            </AnimatePresence>

            {/* Overlay teks (judul + deskripsi) */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={images[index].title}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-6"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Judul huruf demi huruf */}
                    <motion.h1
                        className="font-bold text-5xl md:text-[60px] drop-shadow-2xl leading-tight tracking-tight"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {images[index].title.split("").map((char, i) => (
                            <motion.span
                                key={i}
                                variants={letterVariants}
                                className="inline-block bg-clip-text text-transparent bg-white"
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h1>

                    {/* Garis dekoratif */}
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "8rem", opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="mt-4 h-1 bg-linear-to-r from-[#C99432] via-[#C55A39] to-[#9C1D2A] rounded-full shadow-lg"
                    />

                    {/* Deskripsi fade in */}
                    <motion.p
                        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                            transition: { delay: 1.8, duration: 1 },
                        }}
                        className="mt-8 text-lg md:text-[16px] text-gray-200 tracking-wide max-w-2xl drop-shadow-md"
                    >
                        {images[index].desc}
                    </motion.p>
                </motion.div>
            </AnimatePresence>

            {/* Navigasi manual (bulatan) */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${i === index
                                ? "bg-yellow-400 scale-110"
                                : "bg-white/40 hover:bg-white/70"
                            }`}
                    />
                ))}
            </div>

            {/* Overlay gradasi atas-bawah */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/30 via-black/40 to-black/80" />
        </div>
    );
}
