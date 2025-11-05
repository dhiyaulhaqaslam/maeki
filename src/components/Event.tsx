// src/components/Event.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { events } from "../data"
import event1 from "../assets/bg/event1.png"
import EventCard from "./ui/EventCard";

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
            AGENDA BUDAYA
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Temukan berbagai acara budaya yang menginspirasi dan memperkaya
            wawasan kebudayaan Nusantara.
          </p>
        </motion.div>
      </section>

      {/* EVENT CONTENT */}
      <section className="py-20 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 grid gap-12">
          {/* GRID ATAS */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
            {/* Calendar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center md:col-span-3 border border-gray-200"
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
                  <span className="font-semibold text-red-600">
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
            {/* Poster utama (REPLACE BLOCK) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="md:col-span-4 bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col"
            >
              <div className="relative w-full aspect-video">
                {/* IMAGE: parallax / scale on hover */}
                <motion.img
                  src={event1}
                  alt="Poster Event - Festival Budaya Nusantara"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.02 }}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  style={{ transformOrigin: "center" }}
                />

                {/* VIGNETTE + GRADIENT untuk kontras */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,0,0,0.35),transparent_40%)]" />
                </div>

                {/* DECORATIVE LEFT ACCENT (motif garis tipis) */}
                <svg
                  className="absolute left-4 top-6 w-10 h-10 opacity-70"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path d="M2 12h20" stroke="#FCD34D" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M6 6h12" stroke="#FCD34D" strokeWidth="0.9" strokeLinecap="round" opacity="0.9" />
                </svg>

                {/* DATE CHIP (top-left) */}
                <div className="absolute top-4 left-4">
                  <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M8 7V3M16 7V3M3 11h18M5 21h14a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z" stroke="#7C2D12" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span>{events[0].date}</span>
                  </div>
                </div>

                {/* TITLE & META (bottom-left) */}
                <div className="absolute left-6 bottom-6 right-6">
                  <motion.h2
                    initial={{ y: 12, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight drop-shadow-lg"
                    style={{ textShadow: "0 6px 24px rgba(0,0,0,0.5)" }}
                  >
                    {events[0].title}
                  </motion.h2>

                  <motion.p
                    initial={{ y: 8, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 0.95 }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="mt-3 text-sm md:text-base text-gray-100 max-w-xl"
                  >
                    {events[0].description}
                  </motion.p>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm px-3 py-2 rounded-full backdrop-blur-sm">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M12 7v5l3 3" stroke="#FFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      <span className="font-medium">{events[0].time}</span>
                    </div>

                    <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm px-3 py-2 rounded-full backdrop-blur-sm">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M21 10c0 6-9 11-9 11s-9-5-9-11a9 9 0 1 1 18 0z" stroke="#FFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      <span className="font-medium">{events[0].location}</span>
                    </div>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="ml-auto bg-linear-to-r from-[#B91C1C] to-[#FB923C] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition"
                    >
                      Lihat Detail
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* FOOTER INFO: subtle strip for quick glance */}
              <div className="p-4 bg-white flex flex-wrap items-center justify-between gap-3 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-linear-to-tr from-[#FDE68A] to-[#FCA311] flex items-center justify-center text-sm font-bold text-[#5C1A02]">
                    {new Date(events[0].date).getDate() || "12"}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">{events[0].title}</div>
                    <div className="text-xs text-gray-500">{events[0].location} · {events[0].time}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button className="text-sm text-[#7C2D12] bg-[#FFFBEB] border border-[#FDE68A] px-3 py-1 rounded-full">Tambah ke Kalender</button>
                  <button className="text-sm text-white bg-[#B91C1C] px-4 py-1.5 rounded-full">Daftar Sekarang</button>
                </div>
              </div>
            </motion.div>

          </div>

          {/* GRID EVENT CARD */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 text-center"
          >
            Acara Lainnya
          </motion.h2>

          <EventCard />

        </div>
      </section>
    </div>
  );
}
