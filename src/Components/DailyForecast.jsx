import React from "react";
import { useWeather } from "../hooks/useWeather";

export function DailyForecast() {
  const { forecast, unit } = useWeather();

  if (!forecast) return null;

  // Group by day (simplified - for full implementation you'd need to process the data)
  const dailyData = forecast.list
    .filter((_, index) => index % 8 === 0)
    .slice(0, 5);

  return (
    <div className="daily-forecast">
      <h3>5-Day Forecast</h3>
      <div className="daily-items">
        {dailyData.map((day, index) => (
          <div key={index} className="daily-item">
            <div className="day">
              {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </div>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt={day.weather[0].description}
            />
            <div className="temps">
              <span className="max">{Math.round(day.main.temp_max)}°</span>
              <span className="min">{Math.round(day.main.temp_min)}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
