import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Nav from '../components/Nav/Nav';
import Cards from '../components/Cards/Cards.jsx';
import About from "../components/About/About.jsx";
import Ciudad from "../components/City/Ciudad.jsx";

export default function App() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric&lang=es`)
      .then(res => res.json())
      .then((recurso) => {
        if (cities.length < 15) {
          if (!cities.find((e) => e.id === recurso.id)) {
            if (recurso.main !== undefined) {
              const ciudad = {
                min: Math.round(recurso.main.temp_min),
                max: Math.round(recurso.main.temp_max),
                img: recurso.weather[0].icon,
                id: recurso.id,
                wind: recurso.wind.speed,
                temp: Math.round(recurso.main.temp),
                name: recurso.name,
                weather: recurso.weather[0].main,
                clouds: recurso.clouds.all,
                latitud: recurso.coord.lat,
                longitud: recurso.coord.lon,
                amanecer: recurso.sys.sunrise,
                anochecer: recurso.sys.sunset,
              };
              setCities((oldCities) => [...oldCities, ciudad]);
            } else {
              alert("Ciudad no encontrada.");
            }
          } else {
            alert("Esa ciudad ya fue encontrada. Intente con una diferente.");
          }
        } else {
          alert("Ha alcanzado el máximo de ciudades para mostrar.")
        }
      });
  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  };

  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Switch>
        <Route exact path='/'>
          <Cards cities={cities} onClose={onClose} />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route
          path='/ciudad/:ciudadId'
          render={({ match }) => <Ciudad city={onFilter(match.params.ciudadId)} />}
        >
        </Route>
      </Switch>
    </div>
  );
}
