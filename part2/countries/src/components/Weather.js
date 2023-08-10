import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ city }) => {
  const OPENWEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY
  const [weatherData, setWeatherData] = useState([])
 
  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${OPENWEATHER_API_KEY}`)
      .then(response => setWeatherData(response.data))
  }, [])

  console.log(weatherData)
  return (
    <>
      {(weatherData.main && weatherData.weather) ? (
      <div className='weather'>
        <h2>Weather in {city}</h2>
        <div class='icon'>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          />
          <p><strong><em>{weatherData.weather[0].main}</em></strong></p>
        </div>
        <p><strong>temp </strong>{weatherData.main.temp} Celsius</p>
        <p><strong>wind </strong>{weatherData.wind.speed} kph</p>
      </div>
      ) : null}
    </>
  )
}

export default Weather