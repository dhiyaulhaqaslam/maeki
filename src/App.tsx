// src/App.tsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Welcome from "./Welcome";
import GIS from "./components/GIS";
import News from "./components/News";

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
      <Route
        path="/news"
        element={
          <MainLayout>
            <News />
          </MainLayout>
        }
      />

      {/* kalau mau halaman lain: tambahkan route di sini */}
    </Routes>
  );
}
