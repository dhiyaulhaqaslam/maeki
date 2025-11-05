// src/components/News.tsx
import { motion } from "framer-motion";
import NewsCard from "./ui/NewsCard";

export default function News() {
  return (
    <>
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
