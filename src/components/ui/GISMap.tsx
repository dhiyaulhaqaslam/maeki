// src/components/ui/GISMap.tsx
import { useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import type { Feature, FeatureCollection } from "geojson";
import { motion } from "framer-motion";
import { makassar } from "../../data";

// === FIT BOUNDS UNTUK GEOJSON ===
function FitBoundsForGeoJSON({ data }: { data: FeatureCollection[] }) {
  const map = useMap();

  useEffect(() => {
    try {
      const layers: L.GeoJSON[] = data.map((d) =>
        L.geoJSON(d as GeoJSON.FeatureCollection)
      );
      const group = L.featureGroup(layers);
      const bounds = group.getBounds();
      if (bounds.isValid()) {
        map.fitBounds(bounds, { padding: [20, 20] });
      }

      // Pastikan map menyesuaikan ukuran layar setelah muncul
      setTimeout(() => {
        map.invalidateSize();
      }, 500);
    } catch (e) {
      console.warn("fitBounds error", e);
    }
  }, [data, map]);

  return null;
}

// === KOMPONEN UTAMA PETA ===
export default function GISMap() {
  return (
    <div className="px-4 sm:px-6 md:px-0 w-full"> {/* Tambahkan jarak kanan kiri hanya di mobile */}
      <motion.div
        className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg border border-gray-200"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <MapContainer
          center={[-5.15, 119.45]}
          zoom={12}
          scrollWheelZoom
          className="absolute inset-0 w-full h-full z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <FitBoundsForGeoJSON data={makassar as FeatureCollection[]} />

          {(makassar as FeatureCollection[]).map((data, i) => (
            <GeoJSON
              key={i}
              data={data}
              style={() => ({
                color: "#E11D48", // merah elegan
                weight: 1.5,
                fillColor: "#F87171",
                fillOpacity: 0.25,
              })}
              onEachFeature={(feature: Feature, layer: L.Layer) => {
                const props: any = feature.properties;
                const name = props?.village || props?.district || "Wilayah";
                layer.bindPopup(`<b>${name}</b>`);
              }}
            />
          ))}
        </MapContainer>
      </motion.div>
    </div>
  );
}
