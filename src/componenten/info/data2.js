import React from 'react';
import "./info.css";

const Blok2 = () => {
  return (
  	<section id="data1" className="container">
  	 <div id="infoBlok">
		<div >
	    	<h2>Right from our Docks to anywhere in the world</h2>
	      	<p>We have got it covered. In any quantity, fast and agile delivery is a standard</p>
	    </div>
	    <div id="uren">
	    	<div>
		    	<h1 className="cijfers">24</h1>
		      	<p>Hours a day</p>
		    </div>
		    <div>
		    	<h1 className="cijfers">365</h1>
		      	<p>Days a year</p>
		    </div>
	    </div>
	    <div>
	    	<a href=""><span>Discover our locations</span><img className="arrow" src={require("../../img/arrow.png")} alt="pijl"/></a>
	    </div>
	    </div>
	    <img src={require("../../img/ship_dock.jpg")} alt="dock"/>
  	</section>
   
  );
}

export default Blok2;