
import { format, parseISO } from "date-fns"
import "../WeatherCard.css"

function WeatherCard ({weatherDay, onClick}) {
        const minTemp = Math.round(weatherDay.day.mintemp_c)
        const maxTemp = Math.round(weatherDay.day.maxtemp_c)
        const date = weatherDay.date
        const formatedDate_Day = format(parseISO(date), "E");
        const formatedDate = format(parseISO(date), "dd.MM"); 
       
        return <div className="weather-card" onClick={onClick}>
            <h3>{formatedDate_Day}</h3>
            <p>{formatedDate}</p>
            <div className="weather-img">
                <img src={`https://${weatherDay.day.condition.icon}`}
                alt={weatherDay.day.condition.text}></img>
            </div>
            <div className="weather-info">
                <p> {weatherDay.day.condition.text} </p>
                <p>{`${minTemp}° / ${maxTemp}°C`}</p>
                
            </div>
        </div>
}

export default WeatherCard