import { motion } from "framer-motion"

export default function GIS() {
   return (
      <>
         {/* HERO SECTION */}
         <section
            id="hero"
            className="relative flex flex-col items-center justify-center min-h-[90vh] overflow-hidden text-white bg-gradient-to-b from-black via-gray-900 to-black"
         >
            {/* Background Image */}
            <motion.div
               initial={{ opacity: 0, scale: 1.1 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center opacity-40"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <motion.div
               initial={{ opacity: 0, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3, duration: 1 }}
               className="relative z-10 text-center px-6"
            >
               <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  Sistem Informasi Geospasial
               </h1>
               <p className="max-w-2xl mx-auto text-gray-300 text-lg">
                  Menelusuri kekayaan adat dan budaya melalui peta interaktif
                  yang menghubungkan masyarakat dengan warisan nusantara.
               </p>

               <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition-all"
               >
                  Lihat Peta
               </motion.button>
            </motion.div>
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
                  Halaman ini dirancang untuk menampilkan data budaya dan
                  potensi daerah secara interaktif menggunakan peta geospasial.
                  Dengan pendekatan visual dan teknologi digital, pengguna dapat
                  menjelajahi informasi adat, batas wilayah, serta sebaran
                  budaya secara intuitif.
               </motion.p>
            </div>
         </section>

         {/* MAP SECTION (Placeholder - bisa diganti dengan peta Leaflet/Mapbox nanti) */}
         <section className="relative py-32 bg-gray-950 text-center text-gray-400">
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 1 }}
               className="max-w-5xl mx-auto px-6"
            >
               <h2 className="text-3xl font-semibold mb-6 text-white">
                  Peta Interaktif (Segera Hadir)
               </h2>
               <div className="rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-12">
                     <p className="text-gray-500">
                        Komponen peta (seperti Leaflet atau Mapbox) akan
                        ditampilkan di sini.
                     </p>
                  </div>
               </div>
            </motion.div>
         </section>
      </>
   );
}
