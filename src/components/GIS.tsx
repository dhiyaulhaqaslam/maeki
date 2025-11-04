// src/components/GIS.tsx
import { useEffect } from "react";
import { motion } from "framer-motion";
import { makassar } from "../data";
import L from "leaflet"; // ✅ Import Leaflet global
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { Feature, FeatureCollection } from "geojson";
import { Landmark, Building, Globe, Users } from "lucide-react";

function FitBoundsForGeoJSON({ data }: { data: FeatureCollection[] }) {
   const map = useMap();

   useEffect(() => {
      try {
         const layers: L.GeoJSON[] = data.map((d) =>
            L.geoJSON(d as GeoJSON.FeatureCollection)
         );
         const group = L.featureGroup(layers);
         const bounds = group.getBounds();
         if (bounds.isValid()) map.fitBounds(bounds, { padding: [20, 20] });
      } catch (e) {
         console.warn("fitBounds error", e);
      }
   }, [data, map]);

   return null;
}

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
                  <div className="flex flex-col gap-4 w-[28%]">
                     {/* Kotak 1: Cari Status */}
                     <div className="bg-[#D9D9D9] p-6 rounded-2xl">
                        <h3 className="text-center font-semibold text-black mb-4">
                           Cari Status
                        </h3>

                        <div className="grid gap-3">
                           <input
                              type="text"
                              placeholder="Cari Situs..."
                              className="bg-white text-black px-4 w-full py-3 rounded-2xl focus:ring-2 focus:ring-[#9C1D2A] outline-none"
                           />

                           <select
                              className="bg-white text-black px-4 w-full py-3 rounded-2xl focus:ring-2 focus:ring-[#9C1D2A] outline-none"
                              defaultValue=""
                           >
                              <option value="" disabled>
                                 Pilih Provinsi
                              </option>
                              <option value="Sulawesi Selatan">
                                 Sulawesi Selatan
                              </option>
                              <option value="Jawa Barat">Jawa Barat</option>
                              <option value="Bali">Bali</option>
                           </select>

                           <select
                              className="bg-white text-black px-4 w-full py-3 rounded-2xl focus:ring-2 focus:ring-[#9C1D2A] outline-none"
                              defaultValue=""
                           >
                              <option value="" disabled>
                                 Pilih Kabupaten / Kota
                              </option>
                              <option value="Makassar">Makassar</option>
                              <option value="Gowa">Gowa</option>
                              <option value="Maros">Maros</option>
                           </select>

                           <select
                              className="bg-white text-black px-4 w-full py-3 rounded-2xl focus:ring-2 focus:ring-[#9C1D2A] outline-none"
                              defaultValue=""
                           >
                              <option value="" disabled>
                                 Pilih Jenis Titik Kebudayaan
                              </option>
                              <option value="Museum">Museum</option>
                              <option value="Cagar Budaya">Cagar Budaya</option>
                              <option value="WBTB">WBTB</option>
                              <option value="Komunitas Budaya">
                                 Komunitas Budaya
                              </option>
                           </select>

                           <button className="bg-[#9C1D2A] w-full py-3 rounded-2xl text-white font-semibold hover:bg-[#7e1721] transition-all">
                              Cari
                           </button>
                        </div>
                     </div>

                     {/* Kotak 2: Statistik Data (terpisah) */}
                     <div className="bg-[#D9D9D9] p-6 rounded-2xl shadow-md">
                        <h4 className="text-center text-lg font-semibold text-black mb-4">
                           Statistik Data
                        </h4>

                        <div className="grid gap-3">
                           <div className="flex justify-between items-center border-b pb-2" text-white>
                              <span className="text-black font-medium">
                                 Jumlah Provinsi
                              </span>
                              <span className="font-bold text-black">
                                 34
                              </span>
                           </div>

                           <div className="flex justify-between items-center border-b pb-2">
                              <span className="text-black font-medium">
                                 Jumlah Kabupaten/Kota
                              </span>
                              <span className="font-bold text-black">
                                 514
                              </span>
                           </div>

                           {/* contoh tambahan metrik (opsional) */}
                           <div className="flex justify-between items-center pt-2">
                              <span className="text-black font-medium">
                                 Total Titik Budaya
                              </span>
                              <span className="font-bold text-black">
                                 200
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* KANAN: Peta */}
                  <div className="flex-1 rounded-2xl overflow-hidden">
                     <MapContainer
                        center={[-5.15, 119.45]}
                        zoom={12}
                        className="w-full h-full max-h-[600px] z-0"
                        scrollWheelZoom
                     >
                        <TileLayer
                           attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <FitBoundsForGeoJSON
                           data={makassar as FeatureCollection[]}
                        />

                        {(makassar as FeatureCollection[]).map((data, i) => (
                           <GeoJSON
                              key={i}
                              data={data}
                              style={() => ({
                                 color: "red",
                                 weight: 1,
                                 fillColor: "",
                                 fillOpacity: 0.3,
                              })}
                              onEachFeature={(
                                 feature: Feature,
                                 layer: L.Layer
                              ) => {
                                 const props: any = feature.properties;
                                 const name =
                                    props?.village ||
                                    props?.district ||
                                    "Wilayah";
                                 layer.bindPopup(`<b>${name}</b>`);
                              }}
                           />
                        ))}
                     </MapContainer>
                  </div>
               </div>
            </div>
         </section>

         {/* ABOUT SECTION */}
         <section className="relative py-20 bg-black text-gray-200">
            <div className="max-w-6xl mx-auto px-6 text-center">
               <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-4xl font-semibold mb-6 text-yellow-400"
               >
                  Tentang Halaman GIS
               </motion.h2>
               <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 1 }}
                  className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed"
               >
                  Halaman ini menampilkan batas wilayah dari dataset GeoJSON.
                  Klik tiap wilayah untuk melihat nama kelurahan atau kecamatan.
               </motion.p>
            </div>
         </section>
      </>
   );
}
