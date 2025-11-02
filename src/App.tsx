// src/App.tsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

// komponen halaman GIS (gunakan path sesuai file-mu)
import GIS from "./components/GIS";
import Welcome from "./Welcome";

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
      </Routes>
   );
}
