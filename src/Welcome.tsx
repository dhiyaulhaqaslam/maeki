// src/Welcome.tsx
import { useEffect, useRef } from "react";
import awan1 from "./assets/awan1.png";
import awan2 from "./assets/awan2.png";
import awan3 from "./assets/awan3.png";
import awan4 from "./assets/awan4.png";
import awan5 from "./assets/awan5.png";
import awan6 from "./assets/awan6.png";
import wayang from "./assets/wayang.png";
import wayangA from "./assets/wayangA.png";
import GISMap from "./components/ui/GISMap";
import CultureCarousel from "./components/ui/CultureCarousel";
import { motion, type Variants } from "framer-motion";
import { newsData } from "./data";
import poster from "./assets/bg/event1.png";

export default function Welcome() {
   const kapalRef = useRef<HTMLImageElement | null>(null);
   const awanRefs = useRef<(HTMLImageElement | null)[]>([]);

   const awanList = [
      { src: wayang, style: "bottom-40 -right-50 w-[1000px]", speed: 0.5, direction: 1 },
      { src: wayangA, style: "bottom-40 right-0 w-[300px] z-0", speed: 0.5, direction: 1 },
      { src: awan1, style: "bottom-0 -left-20 w-[300px] z-10", speed: 0.2, direction: -2 },
      { src: awan2, style: "bottom-10 left-10 w-[400px] z-5", speed: 0.25, direction: -2 },
      { src: awan3, style: "bottom-20 -left-40 w-[600px]", speed: 0.3, direction: -2 },
      { src: awan4, style: "bottom-0 -right-20 w-[300px] z-10", speed: 0.35, direction: 2 },
      { src: awan5, style: "bottom-10 right-10 w-[400px] z-5", speed: 0.4, direction: 2 },
      { src: awan6, style: "bottom-20 -right-40 w-[600px]", speed: 0.45, direction: 2 },
   ];

   useEffect(() => {
      const handleScroll = () => {
         const scrollY = window.scrollY;
         if (kapalRef.current)
            kapalRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;

         awanRefs.current.forEach((el, i) => {
            if (!el) return;
            const { speed, direction } = awanList[i];
            el.style.transform = `translateX(${scrollY * speed * direction}px) translateY(${scrollY * speed}px)`;
         });
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   // === ANIMASI TEKS HERO ===

   const Hero = () => (
      <section className="relative h-screen overflow-hidden">
         {/* === Background Carousel === */}
         <CultureCarousel />

         {/* === Overlay Hitam Agar Tulisan Kontras === */}
         <div className="absolute inset-0 z-0" />

      </section>
   );

   return (
      <>
         <Hero />

         {/* GIS */}
         <section className="relative bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto max-h-[800px]">
               <h2 className="text-5xl text-center font-bold my-6 py-6 bg-white/5">
                  Peta GIS
               </h2>
               <GISMap />
            </div>
         </section>

         {/* NEWS */}
         <section className="relative bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto">
               <h2 className="text-5xl text-center font-bold my-6 py-6 bg-white/5">
                  News
               </h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {newsData.map((news) => (
                     <motion.div
                        key={news.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                     >
                        <img
                           src={news.image}
                           alt={news.title}
                           className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                           <h3 className="text-lg font-semibold text-gray-800 mb-1">
                              {news.title}
                           </h3>
                           <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                              {news.description}
                           </p>
                           <a
                              href="#"
                              className="text-blue-600 text-sm font-medium hover:underline"
                           >
                              Lihat selengkapnya →
                           </a>
                           <p className="text-sm text-gray-500 mb-2">
                              Oleh {news.author} · {news.views}x dilihat
                           </p>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* EVENT */}
         <section className="relative bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto">
               <h2 className="text-5xl text-center font-bold my-6 py-6 bg-white/5">
                  Event
               </h2>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                     <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-2xl overflow-hidden transition"
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
      </>
   );
}
