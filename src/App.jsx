import React from "react";
import { WeatherProvider } from "./context/WeatherContext";
import { WeatherForm } from "./Components/WeatherForm";
import { WeatherDisplay } from "./Components/WeatherDisplay";
import { HourlyForecast } from "./Components/HourlyForecast";
import { DailyForecast } from "./Components/DailyForecast";
import { Loading } from "./Components/Loading";
import "./App.css";
import { AQIDisplay } from "./Components/AQIDisplay";

function App() {
  return (
    <WeatherProvider>
      <div className="weather-app">
        <header>
          <h1>Pakistan Weather App</h1>
          <WeatherForm />
        </header>
        <main>
          <Loading />
          <WeatherDisplay />

          <HourlyForecast />
          <DailyForecast />
        </main>
        <footer>
          <p>Data provided by OpenWeatherMap</p>
        </footer>
      </div>
    </WeatherProvider>
  );
}

export default App;
