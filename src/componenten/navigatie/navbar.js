import React, {useState} from 'react';
import "./navbar.css";

const NavBar = () => {
 const [isOpen, setIsOpen] = useState(false)

  return (
    <div id="nav">
      <div>
      	<img src={require("../../img/logo.png")} alt="logo" />
      </div>
      <ul id="dsktpMenu">
        <li><h2>Company</h2></li>
        <li><h2>Products</h2></li>
        <li>
          <div className="dropdown">
            <h2>Cases
            <img src={require("../../img/arrowDown.png")} alt="dropdown"/></h2>
            <div className="dropdown-content">
              <a href="/">Link 1</a>
              <a href="/">Link 2</a>
              <a href="/">Link 3</a>
            </div>
          </div>
        </li>
        <li><h2>Contact</h2></li>
      </ul>
    	<div id="burgerMenu" className={isOpen ? "vorm":"" } style={isOpen ? {position:"fixed"}:{position:"absolute"}} onClick={()=>{setIsOpen(!isOpen)}}>
    		<div className="streep1"></div>
    		<div className="streep2"></div>
    		<div className="streep3"></div>
    	</div>
      <div id="slidenav" style={isOpen ? {maxWidth:"250px"}:{maxWidth:"0"}}>
        <ul id="slidemenu">
          <li>Company</li>
          <li>Products</li>
          <li>Cases</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
