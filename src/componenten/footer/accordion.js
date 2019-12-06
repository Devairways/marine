import React from "react";
import "./footer.css";

const Accordion = () =>{
	return(
		<div>
			<div className="accordion">
		    	<h3>Our company</h3>
		    	<img className="arrowRotate" src={require("../../img/arrow.png")} alt="pijl"/>
		      	<ul className="paneel">
		      		<li>Rich heritance</li>
		      		<li>Management</li>
		      		<li>Values</li>
		      		<li>Locations</li>
		      		<li>Quality documents</li>
		      		<li>General conditions</li>
		      	</ul>
		    </div>
		    <div className="accordion">
		    	<h3>Insights</h3>
		    	<img className="arrowRotate" src={require("../../img/arrow.png")} alt="pijl"/>
		      	<ul className="paneel">
		      		<li>News</li>
		      		<li>Innovations</li>
		      		<li>Customer Cases</li>
		      	</ul>
		    </div>
		    <div className="accordion">
		    	<h3>Applications</h3>
		    	<img className="arrowRotate" src={require("../../img/arrow.png")} alt="pijl"/>
		      	<ul className="paneel">
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
		    <div className="accordion">
		    	<h3>Responsibility</h3>
		    	<img className="arrowRotate" src={require("../../img/arrow.png")} alt="pijl"/>
		      	<ul className="paneel">
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
		)
}

export default Accordion;