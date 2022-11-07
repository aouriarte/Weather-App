import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from "../components/About.jsx";
import Ciudad from "../components/Ciudad.jsx";

export default function App() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
      .then(res => res.json())
      .then((recurso) => {
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
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]); // agrega las ciudades (objeto) al arreglo
        }
        else { alert("Ciudad no encontrada") }
      });
  }
  
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onFilter(ciudadId) {
    let ciudad = cities.find(c => c.id === parseInt(ciudadId));
    return ciudad;
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Switch>
        <Route exact path='/'>
          <Cards
            cities={cities}
            onClose={onClose}
          />
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
