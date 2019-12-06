import React from "react";
import "./footer.css";

const SocialLinks = () =>{
	return(
		<div className="paneel2 border">
	    	<h3>Follow us on</h3>
	      	<ul id="socialLinks">
	      		<li><a href=""><img src={require("../../img/link_icons/linkedIn.png")} height="20px" alt="LinkedIn"/></a></li>
	      		<li><a href=""><img src={require("../../img/link_icons/facebook.png")} height="20px" alt="Facebook"/></a></li>
	      		<li><a href=""><img src={require("../../img/link_icons/twitter.png")} height="20px" alt="Twitter"/></a></li>
	      		<li><a href=""><img src={require("../../img/link_icons/instagram.png")} height="20px" alt="Instagram"/></a></li>
	      		<li><a href=""><img src={require("../../img/link_icons/youtube.png")} height="20px" alt="Youtube"/></a></li>
	      	</ul>
    	</div>
	)
}

export default SocialLinks;