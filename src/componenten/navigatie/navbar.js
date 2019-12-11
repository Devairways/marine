import React, {useState} from 'react';
import "./navbar.css";

const NavBar = () => {
 const [isOpen, setIsOpen] = useState(false)

  return (
    <div id="nav">
      <div>
      	<img src={require("../../img/logo.png")} alt="logo" />
        <img src={require("../../img/logo_slogan.png")} alt="logo_slogan" />
      </div>
      <ul id="dsktpMenu">
        <li><h2>Company</h2></li>
        <li><h2>Applications</h2></li>
        <li><h2>Contact</h2></li>
        <li>
          <div className="dropdown">
            <h2>Global
            <img src={require("../../img/arrowDown.png")} alt="dropdown"/></h2>
            <div className="dropdown-content">
              <a href="/">Link 1</a>
              <a href="/">Link 2</a>
              <a href="/">Link 3</a>
            </div>
          </div>
        </li>
      </ul>
    	<div id="burgerMenu" className={isOpen ? "vorm":"" } style={isOpen ? {position:"fixed"}:{position:"initial"}} onClick={()=>{setIsOpen(!isOpen)}}>
    		<div className="streep1"></div>
    		<div className="streep2"></div>
    		<div className="streep3"></div>
    	</div>
      <div id="slidenav" style={isOpen ? {maxWidth:"250px"}:{maxWidth:"0"}}>
        <ul id="slidemenu">
          <li>Company</li>
          <li>Applications</li>
          <li>Contact</li>
          <li>Global</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
