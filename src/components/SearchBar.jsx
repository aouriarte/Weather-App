import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  return (
    <form
      className="form-inline"
      onSubmit={(e) => {
        e.preventDefault(); // para que la pestaña no refresqué al poner añadir
        onSearch(city);
        setCity("");
      }}
    >
      <input
        className="form-control searchInput"
        type="search"
        placeholder="Search City..."
        aria-label="Search"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <button className="btn searchButton" type="submit">
        Add
      </button>
    </form>
  );
}
