import React, { useState } from "react";
import { useWeather } from "../hooks/useWeather";
import { FiSearch, FiMapPin } from "react-icons/fi";

export function WeatherForm() {
  const { city, setCity, toggleUnit, unit } = useWeather();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setCity(inputValue);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="weather-form">
      <div className="search-container">
        <FiMapPin className="search-icon" />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search for a city in Pakistan..."
        />
        <button type="submit">
          <FiSearch />
        </button>
      </div>
      <button type="button" onClick={toggleUnit} className="unit-toggle">
        °{unit === "metric" ? "F" : "C"}
      </button>
    </form>
  );
}
