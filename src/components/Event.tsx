import { useState } from "react";
import { motion } from "framer-motion";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import poster from "../assets/bg/event1.png";

type CalendarValue = Date | [Date, Date] | null;

export default function Event() {
  const [date, setDate] = useState<CalendarValue>(new Date());

  return (
    <div>
      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center opacity-40"
        />
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="relative z-10 text-center px-6 py-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white drop-shadow-lg">
            Sistem Informasi Geospasial
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 text-lg drop-shadow">
            Menelusuri kekayaan adat dan budaya melalui peta interaktif
            yang menghubungkan masyarakat dengan warisan nusantara.
          </p>
        </motion.div>
      </section>

      {/* EVENT CONTENT */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto grid gap-8 px-6">
          {/* GRID ATAS */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
            {/* Calendar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center md:col-span-3 border border-gray-200"
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                Jadwal Acara
              </h2>
              <Calendar
                onChange={(value) => setDate(value as CalendarValue)}
                value={date}
                className="border-none rounded-xl w-full text-gray-700 my-auto"
              />
              {date && (
                <p className="mt-4 text-gray-600 text-sm italic text-center">
                  Tanggal dipilih:{" "}
                  <span className="font-semibold text-blue-600">
                    {new Date(date as Date).toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </p>
              )}
            </motion.div>

            {/* Poster utama */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="md:col-span-4 bg-white rounded-xl overflow-hidden shadow-lg flex flex-col"
            >
              <div className="relative w-full aspect-[16/9]">
                <img
                  src={poster}
                  alt="Poster Event"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4 bg-gray-800 flex flex-wrap justify-between items-center text-gray-100 font-medium text-sm md:text-base">
                <p className="whitespace-nowrap">🕓 10:30 WIB – Selesai</p>
                <p className="whitespace-nowrap">📍 123 Anywhere St., Any City</p>
              </div>
            </motion.div>
          </div>

          {/* GRID BAWAH */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition"
              >
                <div className="relative w-full aspect-[16/9]">
                  <img
                    src={poster}
                    alt={`Event ${i}`}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-3 bg-gray-900 text-gray-100 text-sm font-medium text-center">
                  Event #{i}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
