// import React from "react";
// import { useWeather } from "../hooks/useWeather";

// export function Forecast() {
//   const { forecast, unit } = useWeather();
//   const tempUnit = unit === "metric" ? "°C" : "°F";

//   if (!forecast) return null;

//   return (
//     <div className="forecast-container">
//       <h3>7-Day Forecast</h3>
//       <div className="forecast-days">
//         {forecast.list.map((day, index) => (
//           <div key={index} className="forecast-day">
//             <p>
//               {new Date(day.dt * 1000).toLocaleDateString("en-PK", {
//                 weekday: "short",
//               })}
//             </p>
//             <img
//               src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
//               alt={day.weather[0].description}
//             />
//             <p>
//               {Math.round(day.temp.day)}
//               {tempUnit}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
