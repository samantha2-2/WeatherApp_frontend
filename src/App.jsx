
import { useEffect, useState } from 'react';
import './App.css'
import WeatherCard from './WeatherCard';


// FETCH DATA
const API_KEY = "45adcb13cdee45d781a182857250804";
const base_URL = "https://api.weatherapi.com/v1/forecast.json?key=";
const city = "Zagreb"
const days = "7"

const getWeatherData = async() => {
  const response = await fetch (`${base_URL}${API_KEY}&q=${city}&days=${days}&aqi=no&alerts=no`)
  const data = await response.json()
    return data
};


// APP

function App() {
  
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState(null);
  //const [weatherDataHour, setweatherDataHour] = useState([]);
  
  // Catch weather data per days
  useEffect(() => {
      const loadweatherData = async () => {
          try {
            const wData = await getWeatherData()
            console.log(wData)
            setWeatherData(wData.forecast.forecastday)

          }
          catch (err) {
            console.log(err)
            setError("Failed to get weather data...")
          }
    };
    loadweatherData();
  }, []);


  return (
    <div>
      <div className='title'>{`${days}-Day Forecast: ${city}`}</div>

      <div className='weather-card-container'>
        {weatherData.map((weatherDay) => (
          <WeatherCard weatherDay = {weatherDay} key = {weatherDay.date}></WeatherCard>
        ))}
      </div>
    </div>
  )
}

export default App;
