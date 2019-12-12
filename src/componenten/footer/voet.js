import React from 'react';
import "./footer.css";

const Voet = () => {
  return (
	    <div id="voet" className="gradientBckgr">
	    	<div id="voetcontent">
	    		<p>&#169; 2019 Marine Paint <br/>
	    	     Part of Alumni <a>Upper Paints</a></p>
	    	     <img className="" src={require("../../img/footer-lets-create-together.png")} alt="slogan"/>
	    	</div>
	    </div>   
  );
}

export default Voet;
