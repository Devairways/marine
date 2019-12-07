import React, {useState} from 'react';
import "./navbar.css";

const NavBar = () => {
 const [isOpen, setIsOpen] = useState(false)

  return (
    <div id="nav">
    	<img src={require("../../img/logo.png")} alt="logo" />
      	<div id="burgerMenu" className={isOpen ? "vorm":"" } style={isOpen ? {position:"fixed"}:{position:"initial"}} onClick={()=>{setIsOpen(!isOpen)}}>
      		<div className="streep1"></div>
      		<div className="streep2"></div>
      		<div className="streep3"></div>
      	</div>
        <div id="slidenav" style={isOpen ? {maxWidth:"200px"}:{maxWidth:"0"}}>
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
