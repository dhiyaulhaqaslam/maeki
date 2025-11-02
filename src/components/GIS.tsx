// src/components/GIS.tsx
import { useEffect } from "react";
import { motion } from "framer-motion";
import { makassar } from "../data";
import L from "leaflet"; // ✅ Import Leaflet global
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { Feature, FeatureCollection } from "geojson";

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
            className="relative flex flex-col items-center justify-center min-h-[40vh] overflow-hidden text-white bg-gradient-to-b from-black via-gray-900 to-black"
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
            className="relative flex flex-col items-center justify-center py-12 bg-gray-900"
         >
            <div className="w-[92%] max-w-7xl">
               <div className="rounded-2xl overflow-hidden shadow-xl h-[70vh] bg-white/5 border border-gray-800">
                  <MapContainer
                     center={[-5.15, 119.45]}
                     zoom={12}
                     className="w-full h-full"
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
                              fillColor: "gold",
                              fillOpacity: 0.3,
                           })}
                           onEachFeature={(
                              feature: Feature,
                              layer: L.Layer
                           ) => {
                              const props: any = feature.properties;
                              const name =
                                 props?.village || props?.district || "Wilayah";
                              layer.bindPopup(`<b>${name}</b>`);
                           }}
                        />
                     ))}
                  </MapContainer>
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
