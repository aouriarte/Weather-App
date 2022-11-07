import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../img/logo.png";
import "./Nav.css";

function Nav({ onSearch }) {
  const [city, setCity] = useState("");

  const handleName = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity("");
  };

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
      <div className="searchBar">
        <input
          className="searchInput"
          type="search"
          placeholder="Search city"
          value={city}
          onChange={(e) => handleName(e)}
        />
        <button
          className="searchButton"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Add
        </button>
      </div>
    </nav>
  );
}

export default Nav;
