import React, { useContext, useState, useEffect } from 'react'
import { WeatherContext} from './GlobalContext'

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
  // console.log("cityname", cityname);

  const [country, setcountry] = useState("");
  // console.log("country", country);

  const [key, setkey] = useState(296644);
  // console.log("key", key);

  const [weather, setweather] = useState("");
  // console.log("weahter", weahter);

  const [temp, settemp] = useState();
  
  // console.log(temp);

  const [date, setdate] = useState();

  const { addWeather } = useContext(WeatherContext)

  
  // const style = {
  //   color: "white",
  //   fontStyle: "italic",
  // };



  //`http://api.openweathermap.org/data/2.5/weather?q=${q}&APPID=1cdba29c6bf95dea1c4a63f27ca5423b`

  const data = async (q) => {
    const API = await fetch(
       `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=p8dcKfJ4gp26wWUqJyTiuAySfT63iurv&q=${q}`
    );
    const resJSON = await API.json();
    return resJSON;
  };

  const url = `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=p8dcKfJ4gp26wWUqJyTiuAySfT63iurv`
  
  useEffect(() => {
    const citydata = async (key) => {
      const cityAPI = await fetch(url);
      const cityJSON = await cityAPI.json();
      return cityJSON;
    };
    citydata().then((resp) => {
      setweather(resp[0].WeatherText);
      settemp(resp[0].Temperature.Metric.Value);
      setdate(resp[0].LocalObservationDateTime);
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

 
  function fav (){

    addWeather(cityname, weather, date, temp, country)

  }

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
          <button type='search' className="fav" onClick={fav}> Add to Fav  </button>
          
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
