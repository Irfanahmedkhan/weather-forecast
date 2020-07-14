import React, { useContext } from 'react'
import { WeatherContext } from './GlobalContext'
import RemoveWeather from './removeWeather'



const Fav = () => {

    const { Weather } = useContext(WeatherContext)
    console.log('Weather', Weather);


    return Weather.length ? (

        <div className='book-list'>
            <ul>
                {Weather.map(Weather => { return (<RemoveWeather Weather={Weather} key={Weather.id} />); })}
            </ul>
        </div>

    )
        :
        (
            <div className='empty'>No Target set ... </div>

        )
}

export default Fav


// {/* <div className="location-box">
//                                 <div className="location">{Weathers.city} </div>
                                
//                             </div> */}
// {/* 
//                             <div className="weather-box">
//                                 <div className="temp"> {c[0].Temperature.Imperial.Value} F </div>
//                                 <div className="weather"> {c[0].WeatherText} </div>
//                             </div>
//                             <button type='search' className="fav" onClick={fav}> Add to Fav  </button>
//  */}