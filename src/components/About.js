import React from 'react';

import '../styles/about.css';

const About = (props) => {
  return (
    <div className="about">
    	<h1 className="about__title">About</h1>
    	<p className="about__text">This is a weather application build on React and the Open Weather Map <a href="https://openweathermap.org/api" target="_blank">API</a></p>
    	<p>It allows you to get the current temperature for any location.</p>
    </div>
  )
}

export default About;