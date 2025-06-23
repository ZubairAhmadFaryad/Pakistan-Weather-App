import React from "react";
import { useWeather } from "../hooks/useWeather";

export function AQIDisplay() {
  const { aqi } = useWeather();

  if (!aqi) return null;

  const categories = ["Good", "Fair", "Moderate", "Poor", "Very Poor"];
  const category = categories[aqi.main.aqi - 1];

  return (
    <div className="aqi-display">
      <h3>
        Air Quality: {category} (Index: {aqi.main.aqi})
      </h3>
      <ul>
        <li>PM2.5: {aqi.components.pm2_5} µg/m³</li>
        <li>PM10: {aqi.components.pm10} µg/m³</li>
        <li>CO: {aqi.components.co} µg/m³</li>
        <li>NO₂: {aqi.components.no2} µg/m³</li>
        <li>O₃: {aqi.components.o3} µg/m³</li>
      </ul>
    </div>
  );
}
