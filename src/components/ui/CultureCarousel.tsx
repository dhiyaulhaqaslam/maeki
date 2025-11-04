// src/components/ui/CultureCarousel.tsx
import { useState, useEffect } from "react";
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
        desc: "rumah tradisional Suku Dani, terutama di daerah pegunungan.",
    },
    {
        src: ulundanu,
        title: "Pura Ulun Danu",
        desc: "Harmoni antara tradisi, alam, dan seni dalam kehidupan masyarakat Bali.",
    },
    {
        src: bolon,
        title: "Rumah Adat Batak",
        desc: "Simbol identitas suku Batak sebagai pusat aktivitas sosial, budaya, dan ritual adat",
    },
];

export default function CultureCarousel() {
    const [index, setIndex] = useState(0);

    // auto-slide tiap 5 detik
    useEffect(() => {
        const interval = setInterval(
            () => setIndex((prev) => (prev + 1) % images.length),
            5000
        );
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
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

            {/* Overlay teks budaya */}
            <motion.div
                key={images[index].title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6"
            >
                <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg mb-4">
                    {images[index].title}
                </h1>
                <p className="max-w-2xl text-lg md:text-xl text-gray-200 leading-relaxed drop-shadow-md">
                    {images[index].desc}
                </p>
            </motion.div>

            {/* Tombol navigasi manual */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${i === index ? "bg-yellow-400 scale-110" : "bg-white/40 hover:bg-white/70"
                            }`}
                    />
                ))}
            </div>

            {/* Overlay gradasi agar lebih sinematik */}
            <div className="absolute inset-0 pointer-events-none" />
        </div>
    );
}
