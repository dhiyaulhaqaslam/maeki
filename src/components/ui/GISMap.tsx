// src/components/ui/GISMap.tsx
import { useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import type { Feature, FeatureCollection } from "geojson";
import { makassar } from "../../data";

function FitBoundsForGeoJSON({ data }: { data: FeatureCollection[] }) {
  const map = useMap();

  useEffect(() => {
    try {
      const layers: L.GeoJSON[] = data.map((d) =>
        L.geoJSON(d as GeoJSON.FeatureCollection)
      );
      const group = L.featureGroup(layers);
      const bounds = group.getBounds();
      if (bounds.isValid()) map.fitBounds(bounds, { padding: [20, 20] });
    } catch (e) {
      console.warn("fitBounds error", e);
    }
  }, [data, map]);

  return null;
}

export default function GISMap() {
  return (
    <div className="relative w-full h-[80vh] rounded-2xl overflow-hidden shadow-lg">
      <MapContainer
        center={[-5.15, 119.45]}
        zoom={12}
        scrollWheelZoom
        className="w-full h-full z-0"
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
              color: "red",
              weight: 1,
              fillColor: "",
              fillOpacity: 0.3,
            })}
            onEachFeature={(feature: Feature, layer: L.Layer) => {
              const props: any = feature.properties;
              const name =
                props?.village || props?.district || "Wilayah";
              layer.bindPopup(`<b>${name}</b>`);
            }}
          />
        ))}
      </MapContainer>
    </div>
  );
}
