import React from 'react';
import "./info.css";

const Blok2 = () => {
  return (
  	<section id="data1" className="container">
  	 <div id="infoBlok">
		<div >
	    	<h2>The industry`s most globally integrated and sustainable supply chain</h2>
	      	<p>We serve you with superior quality ingredients at any time, we are ready to respond with speed and agillity</p>
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
	    	<a href=""><span>Discover our supply chain</span><img className="arrow" src={require("../../img/arrow.png")} alt="pijl"/></a>
	    </div>
	    </div>
	    <img src={require("../../img/Rdam_dock.png")} alt="dock"/>
  	</section>
   
  );
}

export default Blok2;