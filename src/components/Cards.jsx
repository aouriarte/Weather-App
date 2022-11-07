import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({ cities, onClose }) {
  if (cities) {
    return (
      <div className="cards">
        {cities.map((c) => (
          <Card
            key={c.id}
            temp={c.temp}
            clima={c.weather}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={onClose}
            id={c.id}
          />
        ))}
      </div>
    );
  } else {
    return <div>Sin ciudades</div>;
  }
}
