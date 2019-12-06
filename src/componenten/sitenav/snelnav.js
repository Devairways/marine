import React from 'react';
import "./snelnav.css";

const SnelNav = () => {
  return (
  	<section className="gradientBckgr">
	  	<div className="container">
	  		<h2>Fast to</h2>
		    <div>
		    	<div className="navKaart">
		    		<h3>Latest insights</h3>
		    		<ul>
		    			<li>News<img className="arrow" src={require("../../img/arrowW.png")} alt="pijl"/></li>
		    			<li>Innovations<img className="arrow" src={require("../../img/arrowW.png")} alt="pijl"/></li>
		    			<li>Customer cases<img className="arrow" src={require("../../img/arrowW.png")} alt="pijl"/></li>
		    		</ul>
		    		<hr/>
		    		<ul>
		    			<li>Read our latest newsletter<img className="arrow" src={require("../../img/arrowW.png")} alt="pijl"/></li>
		    			<li>Sign up for our sustainability newsletter<img className="arrow" src={require("../../img/arrowW.png")} alt="pijl"/></li>
		    		</ul>
		    	</div>
		    	<div className="navKaart">
		    		<h3>Take responsibility</h3>
		    		<ul>
		    			<li>Social responsibility<img className="arrow" src={require("../../img/arrowW.png")} alt="pijl"/></li>
		    			<li>Sustainable sourcing<img className="arrow" src={require("../../img/arrowW.png")} alt="pijl"/></li>
		    			<li>Palm oils<img className="arrow" src={require("../../img/arrowW.png")} alt="pijl"/></li>
		    			<li>Other oils<img className="arrow" src={require("../../img/arrowW.png")} alt="pijl"/></li>
		    			<li>Grievance procedure<img className="arrow" src={require("../../img/arrowW.png")} alt="pijl"/></li>
		    			<li>Supplier engagement<img className="arrow" src={require("../../img/arrowW.png")} alt="pijl"/></li>
		    		</ul>
		    	</div>
		    	<div className="navKaart">
			    	<div className="overlay1">
				    	<div id="carriere">
				    		<h3>Be part of our future</h3>
				    		<p>Are you committed to innovation, enjoy challenge and want to make a sustainable difference</p>
				    	</div>
				    	<img id="arrowCarr" src={require("../../img/arrowW.png")} alt="pijl1"/>	
			    	</div>
		    	</div>
		    </div>
	  	</div>
    	
  	</section>
    
  );
}

export default SnelNav;