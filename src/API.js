import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./API.css";

import uuid from "react-uuid";

// import axios from 'axios'

import search from "./search.json";
import c from "./c.json";
import days from "./days.json";
console.log(search[0].EnglishName);
console.log(c);
console.log("days", days.DailyForecasts);

function API() {
  const [cityname, setcityname] = useState("");
  console.log("cityname", cityname);

  const [country, setcountry] = useState("");
  console.log("country", country);

  const [key, setkey] = useState(296644);
  console.log("key", key);

  const [weahter, setweahter] = useState("");
  console.log("weahter", weahter);

//   const [temp, settemp] = useState();

  const style = {
    color: "white",
    fontStyle: "italic",
  };

  // const [country, setcountry] = useState()
  // const [data, setdata] = useState()
  // console.log('data', data);

  // const [city, setcity] = useState("");
  // console.log('city', city);

  //`http://api.openweathermap.org/data/2.5/weather?q=${q}&APPID=1cdba29c6bf95dea1c4a63f27ca5423b`

  const data = async () => {
    const API = await fetch(
      search
      //  `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=p8dcKfJ4gp26wWUqJyTiuAySfT63iurv&q=${q}`
    );
    const resJSON = await API.json();
    return resJSON;
  };
  // const url = `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=p8dcKfJ4gp26wWUqJyTiuAySfT63iurv`
  useEffect(() => {
    const citydata = async (key) => {
      const cityAPI = await fetch(c);
      console.log("key", key);

      const cityJSON = await cityAPI.json();
      return cityJSON;
    };
    citydata().then((resp) => {
      setweahter(resp[0].WeatherText);
      console.log(resp);

      settemp(resp[0].Temperature.Metric.Value);
    });
  }, [key]);

  const handler = (e) => {
    e.preventDefault();
    data(cityname).then((res) => {
      setcountry(res[0].Country.EnglishName);
      setcityname(res[0].EnglishName);
      setkey(res[0].Key);
    });
  };

  return (
    <div className="app">
      <main className="main">
        <div className="search-box">
          <input
            className="search-bar"
            type="search"
            value={cityname}
            placeholder="Enter City Name"
            onChange={(e) => setcityname(e.target.value)}
          />
          <button className="search" type="search" onClick={(e) => handler(e)}>
            Search City
          </button>
        </div>

        <div className="currentweather" key={uuid()}>
          <div className="location-box">
            <div className="location">{search[0].EnglishName} </div>
            <div className="date">{new Date(c[0].LocalObservationDateTime).toDateString()}</div>
          </div>

          <div className="weather-box">
            <div className="temp"> {c[0].Temperature.Imperial.Value} F </div>
            <div className="weather"> {c[0].WeatherText} </div>
          </div>

          <button className="fav">
            <Link style={style} to="/Fav">
              {" "}
              Add to Fav.{" "}
            </Link>
          </button>
        </div>

        <div className="forecast">
          <div className="dayone">
            <div className="forecast-date">
              {new Date(days.DailyForecasts[0].Date).toDateString()} {cityname}
            </div>
            <div className="weather-box">
              <div className="forecast-temp">
                {days.DailyForecasts[0].Temperature.Minimum.Value} F{" "}
              </div>
              <div className="forecast-weather">
                {days.DailyForecasts[0].Day.IconPhrase}{" "}
              </div>
            </div>
          </div>

          <div className="daytwo">
            <div className="forecast-date">
              {new Date(days.DailyForecasts[1].Date).toDateString()} {cityname}
            </div>
            <div className="weather-box">
              <div className="forecast-temp">
                {days.DailyForecasts[1].Temperature.Minimum.Value} F
              </div>
              <div className="forecast-weather">
                {days.DailyForecasts[1].Day.IconPhrase}
              </div>
            </div>
          </div>

          <div className="daythree">
            <div className="forecast-date">
              {new Date(days.DailyForecasts[2].Date).toDateString()} {cityname}
            </div>
            <div className="weather-box">
              <div className="forecast-temp">
                {days.DailyForecasts[2].Temperature.Minimum.Value} F
              </div>
              <div className="forecast-weather">
                {days.DailyForecasts[2].Day.IconPhrase}
              </div>
            </div>
          </div>

          <div className="dayfour">
            <div className="forecast-date">
              {new Date(days.DailyForecasts[3].Date).toDateString()} {cityname}
            </div>
            <div className="weather-box">
              <div className="forecast-temp">
                {days.DailyForecasts[3].Temperature.Minimum.Value} F{" "}
              </div>
              <div className="forecast-weather">
                {days.DailyForecasts[3].Day.IconPhrase}
              </div>
            </div>
          </div>

          <div className="dayfive">
            <div className="forecast-date">
              {new Date(days.DailyForecasts[4].Date).toDateString()} {cityname}{" "}
            </div>
            <div className="weather-box">
              <div className="forecast-temp">
                {days.DailyForecasts[4].Temperature.Minimum.Value} F{" "}
              </div>
              <div className="forecast-weather">
                {days.DailyForecasts[4].Day.IconPhrase}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default API;

// < div className = 'forecast' >
//     <div className='dayone'><h1>city name : {cityname}</h1>
//         <h1>city country : {country}</h1>
//         <h1>city key : {key}</h1>
//         <h1>city Temperature is  : {temp}</h1>
//         <h1>city weather is : {weahter}</h1>
//     </div>
//     <div className='daytwo'><h1>city name : {cityname}</h1>
//         <h1>city country : {country}</h1>
//         <h1>city key : {key}</h1>
//         <h1>city Temperature is  : {temp}</h1>
//         <h1>city weather is : {weahter}</h1>
//     </div>
//     <div className='daythree'><h1>city name : {cityname}</h1>
//         <h1>city country : {country}</h1>
//         <h1>city key : {key}</h1>
//         <h1>city Temperature is  : {temp}</h1>
//         <h1>city weather is : {weahter}</h1>
//     </div>
//     <div className='dayfour'><h1>city name : {cityname}</h1>
//         <h1>city country : {country}</h1>
//         <h1>city key : {key}</h1>
//         <h1>city Temperature is  : {temp}</h1>
//         <h1>city weather is : {weahter}</h1>
//     </div>
//     <div className='dayfive'><h1>city name : {cityname}</h1>
//         <h1>city country : {country}</h1>
//         <h1>city key : {key}</h1>
//         <h1>city Temperature is  : {temp}</h1>
//         <h1>city weather is : {weahter}</h1>
//     </div>

//         </div >
