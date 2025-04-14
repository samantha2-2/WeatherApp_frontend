

function ClickedCardDetails ({card}) {
  
    if (!card) return null;
    const maxTemp = Math.round(card.day.maxtemp_c)
    const precip = Math.round(card.day.daily_chance_of_rain)

    return <div className="weather-card-detail">
                <div className="weather-img">
                        <img src={`https://${card.day.condition.icon}`}
                        alt={card.day.condition.text}></img>
                </div>
                <div className="weather-detail">
                <p>{`${maxTemp}°C`}</p>
                <p className="precip-info">{`Precipitation: ${precip}%`}</p>
                
            </div>

             </div>
}

export default ClickedCardDetails;