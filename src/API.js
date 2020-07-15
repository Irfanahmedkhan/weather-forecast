import React, { useContext, useState, useEffect } from 'react'
import { WeatherContext} from './GlobalContext'

import "./API.css";


function API() {
  const [cityname, setcityname] = useState("Tel Aviv");

  const [country, setcountry] = useState(" IL");

  const [key, setkey] = useState(215854);

  const [weather, setweather] = useState("");

  const [temp, settemp] = useState();
  
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


  const data = async (q) => {
    const API = await fetch(
       `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=g7j9OYDVxNrOt6ii61nlMvhG0vCegCuM&q=${q}`
    );
    const resJSON = await API.json();
    return resJSON;
  };

  const url = `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=g7j9OYDVxNrOt6ii61nlMvhG0vCegCuM`


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

  const aa = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=g7j9OYDVxNrOt6ii61nlMvhG0vCegCuM`

  
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
            <div className="location">{cityname} </div>
            <div className="date">{new Date(date).toDateString()}</div>
          </div>

          <div className="weather-box">
            <div className="temp"> {temp} F </div>
            <div className="weather"> {weather} </div>
          </div>
          <button type='search' className="fav" onClick={fav}> Add to Fav  </button>
          
        </div>
        <div className="forecast">
          
          <div className="days">
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

          <div className="days">
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

          <div className="days">
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

          <div className="days">
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

          <div className="days">
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
