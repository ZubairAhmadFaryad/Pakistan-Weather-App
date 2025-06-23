import React from "react";
import { useWeather } from "../hooks/useWeather";
import { RotateSpinner } from "react-spinners-kit";

export function Loading() {
  const { loading } = useWeather();

  if (!loading) return null;

  return (
    <div className="loading" style={{ textAlign: "center", padding: "2rem" }}>
      <div className="spinner"></div>
      <p>Loading weather data...</p>
    </div>
  );
}
