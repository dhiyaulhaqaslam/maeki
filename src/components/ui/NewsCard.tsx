import { newsData } from "../../data";
import { motion } from "framer-motion";

export default function NewsCard() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {newsData.map((news, index) => (
                <motion.div
                    key={news.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl bg-white group transition-all duration-500"
                >
                    {/* IMAGE WRAPPER */}
                    <div className="relative overflow-hidden h-56">
                        <motion.img
                            src={news.image}
                            alt={news.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            whileHover={{ scale: 1.08 }}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                        <motion.span
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-md text-gray-900 text-xs font-semibold px-3 py-1 rounded-full"
                        >
                            Budaya Nusantara
                        </motion.span>
                    </div>

                    {/* CONTENT */}
                    <div className="p-5">
                        <motion.h3
                            whileHover={{ color: "#B91C1C" }}
                            className="text-xl font-bold text-gray-800 mb-2 transition-colors duration-300 line-clamp-2"
                        >
                            {news.title}
                        </motion.h3>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                            {news.description}
                        </p>

                        <div className="flex justify-between items-center text-sm text-gray-500">
                            <p>
                                Oleh{" "}
                                <span className="font-medium text-gray-700">
                                    {news.author}
                                </span>
                            </p>
                            <p>{news.views}x dibaca</p>
                        </div>
                    </div>

                    {/* HOVER EFFECT: Decorative border animation */}
                    <motion.div
                        layoutId={`border-${news.id}`}
                        className="absolute inset-0 border-2 border-transparent group-hover:border-[#C99432] rounded-2xl transition-all duration-500"
                    />
                </motion.div>
            ))}
        </div>
    );
}
