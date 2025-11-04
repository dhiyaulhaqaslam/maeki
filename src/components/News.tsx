// src/components/News.tsx
import { motion } from "framer-motion";
import NewsCard from "./ui/NewsCard";

export default function News() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/80" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="relative z-10 text-center px-6 py-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-wide drop-shadow-lg">
            BUDAYA HARI INI
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Menyelami kekayaan budaya Nusantara yang mempersatukan keberagaman.
          </p>
        </motion.div>
      </section>

      {/* NEWS SECTION */}
      <section className="py-20 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Artikel Budaya Terbaru
          </motion.h2>

          <NewsCard />
        </div>
      </section>
    </>
  );
}
