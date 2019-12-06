import React, {useState} from 'react';
import "./navbar.css";

const NavBar = () => {
 const [isOpen, setIsOpen] = useState(false)

  return (
    <div id="nav">
    	<img src={require("../../img/logo.png")} alt="logo" />
      	<div id="burgerMenu" className={isOpen ? "vorm":"" } onClick={()=>{setIsOpen(!isOpen)}}>
      		<div className="streep1"></div>
      		<div className="streep2"></div>
      		<div className="streep3"></div>
      	</div>
    </div>
  );
}

export default NavBar;
