import React, { useState} from "react";
import "./footer.css";

const Accordion = () =>{
	const [open1, setOpen1] = useState(false)
	const [open2, setOpen2] = useState(false)
	const [open3, setOpen3] = useState(false)
	const [open4, setOpen4] = useState(false)
	
	
	return(
		<div>
			<div className="accordion" onClick={() =>{setOpen1(!open1) }}>
		    	<h3>Our company</h3>
		    	<img className="arrowRotate" src={require("../../img/arrow.png")} alt="pijl"/>
		      	<div className="paneel" style={open1 ? {maxHeight:"100px"}: {maxHeight:"0"}}>
		      		<ul>
		      			<li>Rich heritance</li>
			      		<li>Management</li>
			      		<li>Values</li>
			      		<li>Locations</li>
			      		<li>Quality documents</li>
			      		<li>General conditions</li>
		      		</ul>
		      		
		      	</div>
		    </div>
		    <div className="accordion" onClick={() =>{setOpen2(!open2) }}>
		    	<h3>Insights</h3>
		    	<img className="arrowRotate" src={require("../../img/arrow.png")} alt="pijl"/>
		      	<div className="paneel" style={open2 ? {maxHeight:"100px"}: {maxHeight:"0"}}>
			      	<ul>
			      		<li>News</li>
			      		<li>Innovations</li>
			      		<li>Customer Cases</li>
		      		</ul>
		      	</div>
		    </div>
		    <div className="accordion" onClick={() =>{setOpen3(!open3) }}>
		    	<h3>Applications</h3>
		    	<img className="arrowRotate" src={require("../../img/arrow.png")} alt="pijl"/>
		    	<div className="paneel" style={open3 ? {maxHeight:"250px"}: {maxHeight:"0"}}>
		    		<ul >
			      		<li>Bakery</li>
			      		<li>Confectionery</li>
			      		<li>Spreads</li>
			      		<li>Frying</li>
			      		<li>Culinary</li>
			      		<li>Non-Food products</li>
			      		<li>Dairy Fat Alternatives</li>
			      		<li>Infant Nutrition</li>
			      		<li>Spray Oil</li>
			      		<li>Special Ingredients</li>
			      	</ul>
		    	</div>
		      	
		    </div>
		    <div className="accordion" onClick={() =>{setOpen4(!open4) }}>
		    	<h3>Responsibility</h3>
		    	<img className="arrowRotate" style={open4 ? {transform:"rotate(270deg)"}: {transform:"rotate(90deg)"}} src={require("../../img/arrow.png")} alt="pijl"/>
		      	<div className="paneel" style={open4 ? {maxHeight:"100px"}: {maxHeight:"0"}}>
		      		<ul>
			      		<li>Dashboard</li>
			      		<li>Certification</li>
			      		<li>Social Responsibility</li>
			      		<li>Sustainable Sourcing</li>
			      		<li>Palm Oils</li>
			      		<li>Other Oils</li>
			      		<li>Shea</li>
			      		<li>List of Mills</li>
			      		<li>Grievance Procedure</li>
			      		<li>Supplier Engagement</li>
		      		</ul>
		      	</div>
		    </div>
		</div>
		)
}

export default Accordion;