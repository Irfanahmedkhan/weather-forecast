import React, { useContext } from "react";
import { WeatherContext } from "./GlobalContext";
import "./Favorite.css";

const Favorite = ({ Weather }) => {
  const { removeWeather } = useContext(WeatherContext);
  return (
    <div className="currentweather">
      <div className="location-box">
        <div className="location">{Weather.cityname} </div>
        <div className="date">{new Date(Weather.date).toDateString()}</div>
      </div>

      <div className="weather-box">
        <div className="temp"> {Weather.temp} F </div>
        <div className="weather"> {Weather.weather} </div>
      </div>
      <button className="fav" onClick={() => removeWeather(Weather.id)}>
        Remove
      </button>
    </div>
  );
};

export default Favorite;
