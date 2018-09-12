import React from 'react';

import '../styles/weather-message.css';

const WeatherMessage = ({location, temp, error}) => {
  return (
    <div>
    	<p className="get-weather__message">{temp ? `It's ${temp} ºC in ${location}` : error}</p>
    </div>
  )
}

export default WeatherMessage;