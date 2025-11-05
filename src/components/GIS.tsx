// src/components/GIS.tsx
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";
import { Landmark, Building, Globe, Users } from "lucide-react";
import GISMap from "./ui/GISMap";

export default function GIS() {
   return (
      <>
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
      </>
   );
}
