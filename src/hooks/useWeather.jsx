import { useContext, useEffect } from "react";
import axios from "axios";
import { WeatherContext } from "../context/WeatherContext";

export function useWeather() {
  const { state, dispatch } = useContext(WeatherContext);
  const { city, unit } = state;
  const API_KEY = "47fe9391a41dbdfdeb0a439c1c9c3f80";

  // Fetch weather based on city
  const fetchByCity = async () => {
    dispatch({ type: "FETCH_START" });
    try {
      const [weatherRes, forecastRes] = await Promise.all([
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},PK&units=${unit}&appid=${API_KEY}`
        ),
        axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city},PK&units=${unit}&appid=${API_KEY}`
        ),
      ]);

      const { coord } = weatherRes.data;
      const aqiRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${coord.lat}&lon=${coord.lon}&appid=${API_KEY}`
      );

      dispatch({
        type: "FETCH_SUCCESS",
        payload: {
          weather: weatherRes.data,
          forecast: forecastRes.data,
          aqi: aqiRes.data.list[0], // added
        },
      });
    } catch (err) {
      dispatch({
        type: "FETCH_ERROR",
        payload: err.response?.data?.message || "Failed to fetch weather data",
      });
    }
  };

  const setCity = (city) => {
    dispatch({ type: "SET_CITY", payload: city });
  };

  const toggleUnit = () => {
    const newUnit = unit === "metric" ? "imperial" : "metric";
    dispatch({ type: "SET_UNIT", payload: newUnit });
  };

  useEffect(() => {
    fetchByCity();
  }, [city, unit]);

  return {
    ...state,
    setCity,
    toggleUnit,
    fetchWeatherData: fetchByCity,
  };
}
