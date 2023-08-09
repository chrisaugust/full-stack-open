import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ city }) => {
  const OPENWEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY
  const [weatherData, setWeatherData] = useState([])

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${OPENWEATHER_API_KEY}`)
      .then(response => {
        setWeatherData(response.data)
      })
  }, [])

  console.log(weatherData)

  return (
    <>
      {weatherData.main ? (
        <div className='weather'>
        <h3>Weather in {city}</h3>
        <p><strong>temperature: </strong>{weatherData.main.temp} Fahrenheit</p>
        <p><strong>wind: </strong>{weatherData.wind.speed} mph</p>
        <img 
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt={weatherData.weather[0].description}
        />
        <p><strong>description: </strong>{weatherData.weather[0].description}</p>
      </div>
      ) : null}
    </>
  )
}

export default Weather