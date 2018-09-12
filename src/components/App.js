import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Weather from './Weather';
import About from './About';
import Examples from './Examples';

import '../styles/app.css';

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<BrowserRouter>
				<div className="container">
					<Navbar />
					<div className="main">
						<Switch>
							<Route exact path="/" component={Weather} />
							<Route path="/about" component={About} />
							<Route path="/examples" component={Examples} />
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
