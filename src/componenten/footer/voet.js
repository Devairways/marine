import React from 'react';
import "./footer.css";

const Voet = () => {
  return (
	    <div id="voet" className="gradientBckgr">
	    	<div>
	    		<p>&#169; 2019 Bunge Loder Croklaan<br/>
	    	     Part of Bunge <a>Food & Ingredients</a></p>
	    	     <img className="" src={require("../../img/footer-lets-create-together.png")} alt="slogan"/>
	    	</div>
	    </div>   
  );
}

export default Voet;
