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
		    	<h3>Products</h3>
		    	<div className="">
		    		<ul >
			      		<li>Cargo Holds</li>
			      		<li>Underwater Hull</li>
			      		<li>Topsides</li>
			      		<li>Cargo Tanks</li>
			      		<li>Decks</li>
			      		<li>Portable Watertanks</li>
			      		<li>Ballast Tanks</li>
			      		<li>Anti Foulings</li>
			      		<li>Primers</li>
			      		<li>Cosmetic Finishers</li>
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
			      		<li>Primers</li>
			      		<li>Special Primers</li>
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