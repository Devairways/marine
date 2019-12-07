import React from 'react';
import SocialLinks from "./social";
import "./footer.css";

const Contact = () => {
  return (
  	<div className="dsktpfix">
	    <div className="paneel2">
	    	<h3>Sustainability newsletter</h3>
	      	<p>
	      		Learn more about our journey towards sustainable, traceable and transparant supply chain
	      	</p>
	      	<a href=""><span>Sign up</span><img className="arrow" src={require("../../img/arrow.png")} alt="pijl"/></a>
	    </div>
	    <div id="contact">
		    <div className="paneel2">
		    	<h3>Contact</h3>
		      	<ul>
		      		<li>Hogeweg 1</li>
		      		<li>1521 AZ, Wormerveer</li>
		      		<li>The Netherlands</li>
		      	</ul>
		      	<a href=""><span>Contact form</span><img className="arrow" src={require("../../img/arrow.png")} alt="pijl"/></a>
	      	</div>
	      	<SocialLinks/>
	    </div>
	</div>   
  );
}

export default Contact;