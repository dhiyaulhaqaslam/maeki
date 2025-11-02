// src/App.tsx
import { Routes, Route } from "react-router-dom";
import { useEffect, useRef } from "react";
import MainLayout from "./layouts/MainLayout";

// assets
import awan1 from "./assets/awan1.png";
import awan2 from "./assets/awan2.png";
import awan3 from "./assets/awan3.png";
import awan4 from "./assets/awan4.png";
import awan5 from "./assets/awan5.png";
import awan6 from "./assets/awan6.png";
import wayang from "./assets/wayang.png";
import wayangA from "./assets/wayangA.png";

// komponen halaman GIS (gunakan path sesuai file-mu)
import GIS from "./components/GIS";

function Welcome() {
   const kapalRef = useRef<HTMLImageElement | null>(null);
   const awanRefs = useRef<(HTMLImageElement | null)[]>([]);

   const awanList = [
      {
         src: wayang,
         style: "bottom-40 -right-50 w-[1000px]",
         speed: 0.5,
         direction: 1,
      },
      {
         src: wayangA,
         style: "bottom-40 right-0 w-[300px] z-0",
         speed: 0.5,
         direction: 1,
      },
      {
         src: awan1,
         style: "bottom-0 -left-20 w-[300px] z-10",
         speed: 0.2,
         direction: -2,
      },
      {
         src: awan2,
         style: "bottom-10 left-10 w-[400px] z-5",
         speed: 0.25,
         direction: -2,
      },
      {
         src: awan3,
         style: "bottom-20 -left-40 w-[600px]",
         speed: 0.3,
         direction: -2,
      },
      {
         src: awan4,
         style: "bottom-0 -right-20 w-[300px] z-10",
         speed: 0.35,
         direction: 2,
      },
      {
         src: awan5,
         style: "bottom-10 right-10 w-[400px] z-5",
         speed: 0.4,
         direction: 2,
      },
      {
         src: awan6,
         style: "bottom-20 -right-40 w-[600px]",
         speed: 0.45,
         direction: 2,
      },
   ];

   useEffect(() => {
      const handleScroll = () => {
         const scrollY = window.scrollY;
         if (kapalRef.current)
            kapalRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;

         awanRefs.current.forEach((el, i) => {
            if (!el) return;
            const { speed, direction } = awanList[i];
            el.style.transform = `translateX(${
               scrollY * speed * direction
            }px) translateY(${scrollY * speed}px)`;
         });
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <>
         {/* Hero Section */}
         <section className="relative h-screen overflow-hidden bg-black">
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative flex h-full flex-col items-center justify-center text-white">
               <h1 className="z-10 text-center text-5xl font-bold drop-shadow-lg md:text-6xl">
                  Semakin Dalam, Semakin Kaya
               </h1>
            </div>
         </section>

         {awanList.map((awan, i) => (
            <img
               key={i}
               ref={(el) => {
                  awanRefs.current[i] = el;
               }} // penting: kurung kurawal agar callback ref return void
               src={awan.src}
               alt={`Awan ${i + 1}`}
               className={`absolute opacity-90 select-none z-50 ${awan.style}`}
            />
         ))}

         {/* Section berikutnya */}
         <section className="flex h-screen items-center justify-center text-white">
            <p className="text-xl font-medium drop-shadow-md md:text-2xl">
               Scroll terus untuk menjelajahi budaya Indonesia 🌊
            </p>
         </section>
      </>
   );
}

export default function App() {
   // App berisi Routes; kita bungkus setiap halaman dengan MainLayout
   return (
      <Routes>
         <Route
            path="/"
            element={
               <MainLayout>
                  <Welcome />
               </MainLayout>
            }
         />
         <Route
            path="/gis"
            element={
               <MainLayout>
                  <GIS />
               </MainLayout>
            }
         />
         {/* kalau mau halaman lain: tambahkan route di sini */}
      </Routes>
   );
}
