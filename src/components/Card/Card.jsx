import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";

export default function Card({ temp, name, img, onClose, id, clima }) {
  return (
    <div className="cardContent">
      <button onClick={onClose} className="cardButton">
        X
      </button>
      <div className="clima">
        <img
          src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
          alt=""
        />
        <h3>{temp}°C</h3>
        <h5>Clima: {clima}</h5>
      </div>
      <h4>{name}</h4>
      <Link to={`/ciudad/${id}`}>
        <a>MORE DETAILS</a>
      </Link>
    </div>
  );
}
