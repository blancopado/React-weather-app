import React from 'react';

import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

import openWeatherMapKey from '../weather_api_key/openWeatherMapKey';
import '../styles/weather.css';

class Weather extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			location: '',
			temperature: '',
			error: ''
		}
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(location) {
		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${openWeatherMapKey}`).then((res) => {
			return res.json();
		}).then(weather => {
			this.setState({
				location: location,
				temperature: weather.main.temp,
				error: ''
			});
		}).catch(err => {
			this.setState({
				location: location,
				temperature: '',
				error: `Temperature not found for ${location}`
			});
		});
	}

	render() {
		let {location, temperature, error} = this.state;
		return (
			<div className="get-weather">
				<h3 className="get-weather__title">Get Weather</h3>
				<WeatherForm handleSearch={this.handleSearch} />
				<WeatherMessage location={location} temp={temperature} error={error} />
			</div>
		);
	}
}

export default Weather;