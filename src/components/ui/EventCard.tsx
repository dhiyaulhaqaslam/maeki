import { motion } from "framer-motion";
import { events } from "../../data";

export default function EventCard() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {events.map((event, index) => (
                <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl group transition-all duration-500 border border-gray-100"
                >
                    <div className="relative h-48 overflow-hidden">
                        <motion.img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                        <span className="absolute top-3 left-3 bg-white/80 backdrop-blur-md text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                            {event.date}
                        </span>
                    </div>

                    <div className="p-5">
                        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                            {event.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                            {event.description}
                        </p>

                        <div className="text-sm text-gray-500 space-y-1">
                            <p>🕓 {event.time}</p>
                            <p>📍 {event.location}</p>
                        </div>
                    </div>

                    {/* Hover Border Animation */}
                    <motion.div
                        layoutId={`event-border-${event.id}`}
                        className="absolute inset-0 border-2 border-transparent group-hover:border-red-600 rounded-2xl transition-all duration-500"
                    />
                </motion.div>
            ))}
        </div>
    );
}