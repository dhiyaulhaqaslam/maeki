// src/components/GIS.tsx
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";
import { Landmark, Building, Globe, Users } from "lucide-react";
import GISMap from "./ui/GISMap";

export default function GIS() {
   return (
      <>
         {/* HERO SECTION */}
         <section
            id="hero"
            className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white"
         >
            <motion.div
               initial={{ opacity: 0, scale: 1.02 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1.2, ease: "easeOut" }}
               className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center opacity-30"
            />
            <div className="absolute inset-0 bg-black/50" />

            <motion.div
               initial={{ opacity: 0, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2, duration: 0.9 }}
               className="relative z-10 text-center px-6 py-12"
            >
               <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  Sistem Informasi Geospasial
               </h1>
               <p className="max-w-2xl mx-auto text-gray-300 text-lg">
                  Menelusuri kekayaan adat dan budaya melalui peta interaktif
                  yang menghubungkan masyarakat dengan warisan nusantara.
               </p>
            </motion.div>
         </section>

         {/* MAP SECTION */}
         <section
            id="gis-map"
            className="relative flex flex-col items-center justify-center py-12"
         >
            <div className="grid gap-12 w-[92%] max-w-7xl">
               <div className="w-full grid grid-cols-4 gap-4">
                  <a
                     href="#"
                     className="bg-[#C99432] p-4 rounded-2xl font-semibold flex flex-col justify-between shadow-lg hover:bg-[#d4a645] transition-all"
                  >
                     <div className="flex justify-between items-center gap-3">
                        <Landmark size={36} />
                        <span>Total Museum</span>
                     </div>
                     <span className="block font-bold text-3xl text-end">
                        200
                     </span>
                  </a>

                  <a
                     href="#"
                     className="bg-[#C99432] p-4 rounded-2xl font-semibold flex flex-col justify-between shadow-lg hover:bg-[#d4a645] transition-all"
                  >
                     <div className="flex justify-between items-center gap-3">
                        <Building size={36} />
                        <span>Total Cagar Budaya</span>
                     </div>
                     <span className="block font-bold text-3xl text-end">
                        200
                     </span>
                  </a>

                  <a
                     href="#"
                     className="bg-[#C99432] p-4 rounded-2xl font-semibold flex flex-col justify-between shadow-lg hover:bg-[#d4a645] transition-all"
                  >
                     <div className="flex justify-between items-center gap-3">
                        <Globe size={36} />
                        <span>Total WBTB</span>
                     </div>
                     <span className="block font-bold text-3xl text-end">
                        200
                     </span>
                  </a>

                  <a
                     href="#"
                     className="bg-[#C99432] p-4 rounded-2xl font-semibold flex flex-col justify-between shadow-lg hover:bg-[#d4a645] transition-all"
                  >
                     <div className="flex justify-between items-center gap-3">
                        <Users size={36} />
                        <span>Total Komunitas Budaya</span>
                     </div>
                     <span className="block font-bold text-3xl text-end">
                        200
                     </span>
                  </a>
               </div>

               {/* --- ganti blok lama dengan ini --- */}
               <div className="flex gap-8 rounded-2xl overflow-hidden h-[70vh]">
                  {/* KIRI: dua kotak terpisah (stacked) */}


                  {/* KANAN: Peta */}
                  <div className="flex-1 rounded-2xl overflow-hidden">
                     <GISMap />
                  </div>
               </div>
            </div>
         </section>

         {/* ABOUT SECTION */}
         <section className="relative py-20 bg-black text-gray-200">
            <div className="max-w-6xl mx-auto px-6 text-center">

            </div>
         </section>
      </>
   );
}
