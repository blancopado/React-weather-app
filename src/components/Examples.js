import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/examples.css'

const Examples = (props) => {
  return (
    <div className="examples">
    	<h1 className="examples__title">Example cities</h1>
      <div className="examples__text">
      	<p>Here are a few example locations to try out:</p>
      	<ol className="examples__list">
      		<li>
      			<Link to={{
  	    			pathname: '/',
  	    			search: '?location=Paris'}}>Paris
  	    		</Link>
  	    	</li>
      		<li>
      			<Link to={{
      				pathname: '/',
      				search: '?location=Madrid'}}>Madrid
      			</Link>
      		</li>
      	</ol>
      </div>
    </div>
  )
}

export default Examples;