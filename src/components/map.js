import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import markpoint from "../images/icon-location.svg";

function Map() {
  const position = [51.505, -0.09];

  return (
    <div className="relative">
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "390px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={position}>{markpoint}</Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
