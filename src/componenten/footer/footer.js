import React from 'react';
import Accordion from './accordion';
import SocialLinks from './social';
import "./footer.css";

const Footer = () => {
  return (
  	<footer>
  		<div>
  		    <Accordion/>
		    <div className="paneel2">
		    	<h3>Sustainability newsletter</h3>
		      	<p>
		      		Learn more about our journey towards sustainable, traceable and transparant supply chain
		      	</p>
		      	<a href=""><span>Sign up</span><img className="arrow" src={require("../../img/arrow.png")} alt="pijl"/></a>
		    </div>
		    <div className="paneel2">
		    	<h3>Contact</h3>
		      	<ul>
		      		<li>Hogeweg 1</li>
		      		<li>1521 AZ, Wormerveer</li>
		      		<li>The Netherlands</li>
		      	</ul>
		      	<a href=""><span>Contact form</span><img className="arrow" src={require("../../img/arrow.png")} alt="pijl"/></a>
		    </div>
		</div>
		<SocialLinks/>
	    <div id="voet" className="gradientBckgr">
	    	<div>
	    		<p>&#169; 2019 Bunge Loder Croklaan<br/>
	    	     Part of Bunge <a>Food & Ingredients</a></p>
	    	     <img className="" src={require("../../img/footer-lets-create-together.png")} alt="slogan"/>
	    	</div>
    		
	    </div>
	</footer>
   
  );
}

export default Footer;
