import React from 'react';
import './Cards.css';
import Card from '../Card/Card';

export default function Cards({ cities, onClose }) {
  
    return (
      <div className="cards">
        {cities.map((c) => (
          <Card
            key={c.id}
            id={c.id}
            temp={c.temp}
            clima={c.weather}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={onClose}
          />
        ))}
      </div>
    );
  
}
