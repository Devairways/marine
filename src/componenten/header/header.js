import React from 'react';
import NavBar from "../navigatie/navbar";
import "./header.css";

const Header = () => {
  return (
    <header>
    	<div className="overlay gridfix">
	        <div className="container">
	          <NavBar/>
	          <h1>The number one producer of premium Marine Paint and Coating products</h1>
	        </div> 
	        <div id="button">About us<img className="arrow" src={require("../../img/arrowW.png")} alt="pijl"/></div>
	    </div>
    </header>
  );
}

export default Header;