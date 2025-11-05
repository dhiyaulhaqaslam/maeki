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
import NewsCard from "./components/ui/NewsCard";
import EventCard from "./components/ui/EventCard";

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
         <section className="relative text-[#9C1D2A] py-12">
            <div className="max-w-7xl mx-auto max-h-[800px]">
               <h2 className="text-5xl text-center font-bold my-6 py-6 bg-white/5">
                  Peta GIS
               </h2>
               <GISMap />
            </div>
         </section>

         {/* NEWS */}
         <section className="relative text-[#9C1D2A] py-12">
            <div className="max-w-7xl mx-auto">
               <h2 className="text-5xl text-center font-bold my-6 py-6 bg-white/5">
                  News
               </h2>
               <NewsCard />
            </div>
         </section>

         {/* EVENT */}
         <section className="relative text-[#9C1D2A] py-12">
            <div className="max-w-7xl mx-auto">
               <h2 className="text-5xl text-center font-bold my-6 py-6 bg-white/5">
                  Event
               </h2>
               <EventCard />
            </div>
         </section>
      </>
   );
}
