import React from 'react';
import Accordion from './accordion';
import Dsktp from './dsktp';
import Voet from './voet';
import "./footer.css";

const Footer = () => {
  return (
  	<footer>
  		<div id="dsktopfooter">
  		    <Dsktp/>
		 </div>
		 <div id="mobfooter">
  		    <Accordion />
		 </div>
	    <Voet/>
	</footer>
  );
}

export default Footer;
