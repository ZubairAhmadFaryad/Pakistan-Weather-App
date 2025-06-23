import React from "react";
import { useWeather } from "../hooks/useWeather";
import {
  WiRain,
  WiStrongWind,
  WiHumidity,
  WiBarometer,
  WiSmoke,
  WiDaySunny,
} from "react-icons/wi";

export function WeatherDisplay() {
  const { weather, unit, error, aqi } = useWeather(); // ✅ aqi bhi liya

  if (error) return <div className="error-message">{error}</div>;
  if (!weather) return null;

  // ✅ AQI Level Checker (based on AQI index from 1–5)
  const getAqiDescription = (index) => {
    switch (index) {
      case 1:
        return "Good";
      case 2:
        return "Fair";
      case 3:
        return "Moderate";
      case 4:
        return "Poor";
      case 5:
        return "Very Poor";
      default:
        return "Fair";
    }
  };

  // ✅ Static UV Index (demo — replace with API if needed)
  const mockUVIndex = 6.4;

  return (
    <div className="weather-display">
      <div className="current-weather">
        <div className="main-info">
          <h2>{weather.name}</h2>
          <div className="temperature">
            {Math.round(weather.main.temp)}°{unit === "metric" ? "C" : "F"}
          </div>
          <div className="weather-condition">
            {weather.weather[0].main}
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt={weather.weather[0].description}
            />
          </div>
        </div>

        <div className="weather-details">
          <div className="detail-item">
            <WiHumidity size={24} />
            <span>Humidity: {weather.main.humidity}%</span>
          </div>
          <div className="detail-item">
            <WiStrongWind size={24} />
            <span>
              Wind: {weather.wind.speed} {unit === "metric" ? "m/s" : "mph"}
            </span>
          </div>
          <div className="detail-item">
            <WiRain size={24} />
            <span>
              Rain: {weather.rain ? `${weather.rain["1h"]}mm` : "0mm"}
            </span>
          </div>
          <div className="detail-item">
            <WiBarometer size={24} />
            <span>Pressure: {weather.main.pressure}hPa</span>
          </div>

          {/* ✅ NEW: AQI (Air Quality Index) */}
          {aqi && (
            <div className="detail-item">
              <WiSmoke size={24} />
              <span>
                Air Quality: {getAqiDescription(aqi.main.aqi)} ({aqi.main.aqi})
              </span>
            </div>
          )}

          {/* ✅ NEW: UV Index (static or API-based) */}
          <div className="detail-item">
            <WiDaySunny size={24} />
            <span>UV Index: {mockUVIndex}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
