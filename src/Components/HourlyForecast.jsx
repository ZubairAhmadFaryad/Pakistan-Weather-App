import React from "react";
import { useWeather } from "../hooks/useWeather";

export function HourlyForecast() {
  const { forecast, unit } = useWeather();

  if (!forecast) return null;

  // Get next 8 forecast entries (each 3 hours apart)
  const hourlyData = forecast.list.slice(0, 8);

  // Function to convert timestamp to AM/PM format
  const formatHour = (timestamp) => {
    const date = new Date(timestamp * 1000);
    let hours = date.getHours();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 0 to 12
    return `${hours} ${ampm}`;
  };

  return (
    <div className="hourly-forecast">
      <h3>Hourly Forecast</h3>
      <small style={{ color: "#666" }}>Showing every 3 Hours</small>
      <div className="hourly-items">
        {hourlyData.map((hour, index) => (
          <div key={index} className="hourly-item">
            <div className="hour">{formatHour(hour.dt)}</div>
            <img
              src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
              alt={hour.weather[0].description}
            />
            <div className="temp">{Math.round(hour.main.temp)}°</div>
            <div className="rain">
              {hour.rain ? `${hour.rain["1h"]}mm` : "0mm"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
