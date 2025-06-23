import React, { createContext, useReducer } from "react";

const initialState = {
  weather: null,
  forecast: null,
  aqi: null, // added
  city: "Islamabad",
  loading: false,
  error: "",
  unit: "metric",
};

function weatherReducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        weather: action.payload.weather,
        forecast: action.payload.forecast,
        aqi: action.payload.aqi, // added
      };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "SET_CITY":
      return { ...state, city: action.payload };
    case "SET_UNIT":
      return { ...state, unit: action.payload };
    default:
      return state;
  }
}

export const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [state, dispatch] = useReducer(weatherReducer, initialState);
  return (
    <WeatherContext.Provider value={{ state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
}
