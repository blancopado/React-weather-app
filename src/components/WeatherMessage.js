import React from 'react';

const WeatherMessage = ({location, temp, error}) => {
  return (
    <div>
    	<p>{temp ? `It's ${temp} ºC in ${location}` : error}</p>
    </div>
  )
}

export default WeatherMessage;