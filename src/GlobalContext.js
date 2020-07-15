import React, { createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "./localstorage";

export const WeatherContext = createContext();

const WeatherContextprovider = (props) => {
  const [Weather, setWeather] = useLocalStorage("weather", []);

  const addWeather = (cityname, weather, date, tempr, country) => {
    setWeather([
      ...Weather,
      { cityname, weather, date, tempr, country, id: uuidv4() },
    ]);
  };

  const removeWeather = (id) => {
    setWeather(Weather.filter((a) => a.id !== id));
  };

  return (
    <WeatherContext.Provider value={{ Weather, addWeather, removeWeather }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextprovider;
