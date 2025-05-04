import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = ({ houses = [], selectedHouse = null, onHouseSelect }) => {
  const mapRef = useRef(null);      // To hold the map instance
  const mapContainerRef = useRef(); // To reference the div#map
  const [markers, setMarkers] = useState([]);

  // Initialize map only once
  useEffect(() => {
    if (mapRef.current || !mapContainerRef.current) return;

    const defaultCenter = [34.0522, -118.2437]; // Los Angeles
    const map = L.map(mapContainerRef.current).setView(defaultCenter, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    mapRef.current = map;

    return () => {
      map.remove();
    };
  }, []);

  // Add/update markers when houses or selectedHouse change
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !houses.length) return;

    // Clear previous markers
    markers.forEach((m) => m.remove());
    const newMarkers = [];

    houses.forEach((house) => {
      if (house.latitude && house.longitude) {
        const isSelected = selectedHouse && selectedHouse.id === house.id;

        const icon = L.divIcon({
          className: 'custom-marker',
          html: `<div class="${isSelected ? 'bg-blue-600' : 'bg-red-500'} text-white rounded-full p-2 shadow-md">
                   <span class="flex items-center justify-center h-6 w-6 font-bold">$${Math.floor(house.price / 100)}</span>
                 </div>`,
          iconSize: [32, 32],
          iconAnchor: [16, 32],
        });

        const marker = L.marker([house.latitude, house.longitude], { icon })
          .addTo(map)
          .bindPopup(`
            <div class="popup-content">
              <h3 class="font-bold">${house.name}</h3>
              <p>${house.bedrooms} bed · ${house.bathrooms} bath</p>
              <p class="font-bold">$${house.price}/month</p>
              <button class="view-details bg-blue-600 text-white py-1 px-2 mt-2 rounded text-xs">View Details</button>
            </div>
          `);

        marker.on('click', () => {
          if (onHouseSelect) {
            onHouseSelect(house);
          }
        });

        newMarkers.push(marker);

        if (isSelected) {
          marker.openPopup();
          map.setView([house.latitude, house.longitude], 15);
        }
      }
    });

    setMarkers(newMarkers);

    // Fit bounds to all houses if none selected
    if (!selectedHouse && houses.length) {
      const bounds = L.latLngBounds(
        houses
          .filter((h) => h.latitude && h.longitude)
          .map((h) => [h.latitude, h.longitude])
      );
      if (bounds.isValid()) {
        map.fitBounds(bounds, { padding: [50, 50] });
      }
    }
  }, [houses, selectedHouse]);

  return (
    <div className="relative h-96 md:h-full w-full rounded-lg overflow-hidden shadow-md">
      <div ref={mapContainerRef} className="h-full w-full" />
      <div className="absolute bottom-4 right-4 bg-white p-2 rounded-md shadow-md z-10">
        <button
          className="text-gray-700 text-xs"
          onClick={() => {
            const map = mapRef.current;
            if (map && houses.length) {
              const bounds = L.latLngBounds(
                houses
                  .filter((h) => h.latitude && h.longitude)
                  .map((h) => [h.latitude, h.longitude])
              );
              if (bounds.isValid()) {
                map.fitBounds(bounds, { padding: [50, 50] });
              }
            }
          }}
        >
          Reset View
        </button>
      </div>
    </div>
  );
};

export default MapView;
