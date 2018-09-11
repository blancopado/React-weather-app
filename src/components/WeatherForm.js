import React from 'react';

import '../styles/weather-form.css';

class WeatherForm extends React.Component {
	constructor(props) {
		super(props);

		this.onFormSubmit = this.onFormSubmit.bind(this)
	}

	onFormSubmit(e) {
		e.preventDefault();

		let location = this.refs.location.value.replace(/^\w/, c => c.toUpperCase());

		if (location.length > 0) {
			this.refs.location.value = '';
			this.props.location;
		}
		this.props.handleSearch(location);
	}

	render() {
		return (
			<div>
				<form className="get-weather__form" onSubmit={this.onFormSubmit}>
					<input className="get-weather__form-text" type="text" placeholder="Enter city name" ref="location" />
					<input className="get-weather__form-button" type="submit" />
				</form>
			</div>
		);
	}
}

export default WeatherForm;