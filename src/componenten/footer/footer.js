import React from 'react';
import Accordion from './accordion';
import Contact from './contact';
import SocialLinks from './social';
import Voet from './voet';
import "./footer.css";

const Footer = () => {
  return (
  	<footer>
  		<div>
  		    <Accordion/>
		    <Contact/>
		</div>
		<SocialLinks/>
	    <Voet/>
	</footer>
  );
}

export default Footer;
