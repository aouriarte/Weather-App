import React from "react";

import "./Details.css";

export default function Ciudad({ city }) {
  if (!city) return <h3>No se encontró esa ciudad</h3>;
  
  return (
    <div className="content">
        <h2>{city.name}</h2>
        <div className="info">
          <p>Min Temp: {city.min}°C</p>
          <p>Max Temp: {city.max}°C</p>
          <p>Viento: {city.wind} km/h</p>
          <p>Cantidad de nubes: {city.clouds}</p>
          <p>Latitud: {city.latitud}º</p>
          <p>Longitud: {city.longitud}º</p>
        </div>

    </div>
  );
}
