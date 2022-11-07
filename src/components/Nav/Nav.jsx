import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../img/logo.png";
import "./Nav.css";

function Nav({ onSearch }) {
  const [city, setCity] = useState("");

  return (
    <nav className="nav">
      <Link to="/">
        <span className="">
          <img src={Logo} width="50" height="50" alt="Logo Not Found" />
          Weather App
        </span>
      </Link>
      <Link to="/about">
        <span>💡About</span>
      </Link>
      <form
        className="searchBar"
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(city);
          setCity("");
        }}
      >
        <input
          type="text"
          className="searchInput"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search city"
        />
        <button className="searchButton" type="submit">
          Add
        </button>
      </form>
    </nav>
  );
}

export default Nav;
