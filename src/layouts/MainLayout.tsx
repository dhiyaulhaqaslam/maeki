import { motion } from "framer-motion";
import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import GlobalCursorEffect from "../components/ui/GlobalCursorEffect";
import BottomNav from "../components/BottomNav";

interface MainLayoutProps {
   children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
   return (
      <>
         {/* Efek cahaya global */}
         <GlobalCursorEffect />

         {/* Navbar fixed di atas */}
         <Navbar />

         {/* Konten halaman — cukup min-h-screen */}
         <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen text-white overflow-x-hidden"
         >
            {children}
         </motion.main>

         {/* Footer di bawah */}
         <BottomNav />

      </>
   );
}
