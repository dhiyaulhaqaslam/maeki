import { motion } from "framer-motion";
import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface MainLayoutProps {
   children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
   return (
      <>
         {/* Navbar fixed di atas */}
         <Navbar />

         {/* Konten halaman — cukup min-h-screen */}
         <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen bg-black text-white overflow-x-hidden"
         >
            {children}
         </motion.main>

         {/* Footer di bawah */}
         <Footer />
      </>
   );
}
