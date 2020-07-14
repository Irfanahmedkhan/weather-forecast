import React, { useContext, useState, useEffect } from 'react'
import { WeatherContext} from './GlobalContext'

import "./API.css";


// import axios from 'axios'

// import search from "./search.json";
// import c from "./c.json";
// import days from "./days.json";
// console.log(search[0].EnglishName);
// console.log(c);
// console.log("days", days.DailyForecasts);

function API() {
  const [cityname, setcityname] = useState("Tel Aviv");
  console.log("cityname", cityname);

  const [country, setcountry] = useState(" IL");
  // console.log("country", country);

  const [key, setkey] = useState(215854);
  // console.log("key", key);

  const [weather, setweather] = useState("");
  // console.log("weahter", weahter);

  const [temp, settemp] = useState();
  
  // console.log(temp);

  const [date, setdate] = useState();

  const { addWeather } = useContext(WeatherContext)

  const [days, setdays] = useState({

    "DailyForecasts": [
      {
        "Date": "",

        "Temperature": {
          "Minimum": { "Value": 0}
        },
        "Day": {
          "IconPhrase": ""
        }
      },

      {
        "Date": "",
        "Temperature": {
          "Minimum": {
            "Value": 0
            }
        },
        "Day": {
          "IconPhrase": ""
        }
      },

      {
        "Date": "",
        "Temperature": {
          "Minimum": {
            "Value": 0
            }
        },
        "Day": {
          "IconPhrase": ""
        }
      },

      {
        "Date": "",
        "Temperature": {
          "Minimum": {
            "Value": 0
            }
        },
        "Day": {
          "IconPhrase": ""
        }
      },

      {
        "Date": "",
        "Temperature": {
          "Minimum": {
            "Value": 0
            }
        },
        "Day": {
          "IconPhrase": ""
        }
      },

      {
        "Date": "",
        "Temperature": {
          "Minimum": {
            "Value": 0
            }
        },
        "Day": {
          "IconPhrase": ""
        }
      }
    ]
  }
)

  console.log('days',days);
  // const style = {
  //   color: "white",
  //   fontStyle: "italic",
  // };


  const data = async (q) => {
    const API = await fetch(
       `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=p8dcKfJ4gp26wWUqJyTiuAySfT63iurv&q=${q}`
    );
    const resJSON = await API.json();
    return resJSON;
  };

  const url = `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=p8dcKfJ4gp26wWUqJyTiuAySfT63iurv`


  const handler = (e) => {
    e.preventDefault();
    data(cityname)
      .then((res) => {
        setcountry(res[0].Country.ID);
        setcityname(res[0].LocalizedName);
        setkey(res[0].Key);
      });
  };


  
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
  }, [key, url]);

  const aa = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=p8dcKfJ4gp26wWUqJyTiuAySfT63iurv`

  
  useEffect(() => {

    const dailydata = async (key) => {
      const daysAPI = await fetch(aa);
      const daysAPIJSON = await daysAPI.json();
      return daysAPIJSON;
    };
    dailydata().then((daysAPI) => {
      setdays(daysAPI);
    });
  }, [key, aa]);


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
            placeholder="Enter City Name"
            onChange={(e) => setcityname(e.target.value)}
          />
          <button className="search" type="search" onClick={(e) => handler(e)}>
            Search City
          </button>
          

        </div>

        <div className="currentweather" >
          <div className="location-box">
            <div className="location">{cityname},{country} </div>
            <div className="date">{new Date(date).toDateString()}</div>
          </div>

          <div className="weather-box">
            <div className="temp"> {temp} F </div>
            <div className="weather"> {weather} </div>
          </div>
          <button type='search' className="fav" onClick={fav}> Add to Fav  </button>
          
        </div>


        <div className="forecast">
          <div className="dayone">
            <div className="forecast-date">
              {new Date(days.DailyForecasts[0].Date).toDateString()} 
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
              {new Date(days.DailyForecasts[1].Date).toDateString()} 
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
              {new Date(days.DailyForecasts[2].Date).toDateString()} 
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
              {new Date(days.DailyForecasts[3].Date).toDateString()} 
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
              {new Date(days.DailyForecasts[4].Date).toDateString()} 
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
