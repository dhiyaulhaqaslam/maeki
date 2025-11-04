// src/App.tsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Welcome from "./Welcome";
import GIS from "./components/GIS";
import News from "./components/News";
import Event from "./components/Event";

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
      <Route
        path="/event"
        element={
          <MainLayout>
            <Event />
          </MainLayout>
        }
      />

      {/* kalau mau halaman lain: tambahkan route di sini */}
    </Routes>
  );
}
