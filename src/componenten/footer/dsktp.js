import React from "react";
import Contact from './contact';
import "./footer.css";

const Dsktp = () =>{
	return(
		<div id="desktop">
			<div className="column">
		    	<h3>Our company</h3>
		    	<div className="">
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
		    <div className="column">
		    	<h3>Insights</h3>
		    	<div className="">
			      	<ul>
			      		<li>News</li>
			      		<li>Innovations</li>
			      		<li>Customer Cases</li>
		      		</ul>
		      	</div>
		    </div>
		    <div className="column">
		    	<h3>Applications</h3>
		    	<div className="">
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
		    <div className="column">
		    	<h3>Responsibility</h3>
		    	<div className="">
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
		    <Contact/>
		</div>
		)
}

export default Dsktp;