import React, { useContext } from "react";
import { WeatherContext } from "./GlobalContext";
import Favorite from "./Favorite";

const Data = () => {
  const { Weather } = useContext(WeatherContext);
  console.log("Weather", Weather);

  return Weather.length ? (
    <div className="book-list">
      <ul>
        {Weather.map((Weather) => {
          return <Favorite Weather={Weather} key={Weather.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty"> No Favorite City </div>
  );
};

export default Data;
