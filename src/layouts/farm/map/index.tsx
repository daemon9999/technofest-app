import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
export default function Map() {
  const mapContainerRef = useRef<null | HTMLDivElement>(null);
  const apiKey = "7SzsQRqmB4FARXEyZeuJ";
  const mapStyleUrl =
    "https://api.maptiler.com/maps/00f52ade-3eb9-4aa1-bcfa-dc9d7a7136f4/style.json?key=";

  useEffect(() => {
    mapboxgl.accessToken = "no-token-needed";
    const map = new mapboxgl.Map({
      container: mapContainerRef?.current || "",
      style: mapStyleUrl + apiKey,
      center: [48.30799598261211, 40.03018436474803], // Longitude, Latitude
      zoom: 14,
    });

    map.on("load", () => {
      // Define the polygon coordinates as an array of points
      const polygonCoordinates = [
        [48.30340, 40.03474], // First point
        [48.31638, 40.03199], // Second point
        [48.30961, 40.02578], // Third point
        [48.30095, 40.02755], // Fourth point
        [48.30353, 40.03178], // Closing the polygon back to the first point
      ];

      // Add a source of type 'geojson' which contains the coordinates
      map.addSource("polygon", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Polygon",
            coordinates: [polygonCoordinates],
          },
        },
      });

      // Add a new layer to visualize the polygon
      map.addLayer({
        id: "polygon",
        type: "fill",
        source: "polygon",
        layout: {},
        paint: {
          "fill-color": "#D4D21B", // Fill color of the polygon
     
          "fill-opacity": 0.3 // Transparency of the polygon
        },
      });

      map.addLayer({
        id: 'polygon-outline',
        type: 'line',
        source: 'polygon',
        layout: {},
        paint: {
          'line-color': '#3D5227', // Color of the outline
          'line-width': 5     // Width of the outline
        }
      });
    });
  }, []);
  return (
    <>
      <div
        className="map-container flex-shrink-0"
        ref={mapContainerRef}
        style={{ height: "600px", width: "600px" }}

      />
    </>
  );
}
