import React from 'react';
import NavBar from "../navigatie/navbar";
import "./header.css";

const Header = () => {
  return (
    <header>
        <div className="container">
          <NavBar/>
          <h1>The leading producer of premium quality vegetable oils and fats</h1>
        </div> 
        <div id="button">About us<img className="arrow" src={require("../../img/arrowW.png")} alt="pijl"/></div>
    </header>
  );
}

export default Header;