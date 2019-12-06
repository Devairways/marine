import React from 'react';
import "./producten.css";

const Producten = () => {
	const producten = [
		{
			product: "Bakery",
			img: require("../../img/producten/bakery.png")
		},
		{
			product: "Confectionary",
			img: require("../../img/producten/confectionary.png")
		},
		{
			product: "Spreads",
			img: require("../../img/producten/spreads.png")
		},
		{
			product: "Frying",
			img: require("../../img/producten/frying.png")
		},
		{
			product: "Culinary",
			img: require("../../img/producten/culinary.png")
		},
		{
			product: "Non-food Products",
			img: require("../../img/producten/non-food.png")
		},
		{
			product: "Dairy Fat Alternatives",
			img: require("../../img/producten/dairyfatalts.png")
		},
		{
			product: "Special Ingredients",
			img: require("../../img/producten/spec_ingr.png")
		},
		{
			product: "Dairy Fat Alternatives",
			img: require("../../img/producten/dairy_fat_alt.png")
		},
		{
			product: "Spray Oil",
			img: require("../../img/producten/sprayoil.png")
		},
	]
    return (
	  	<section>
	  		<div className="gradientBckgr">
	  			<div className="container">
		    	<h2>Our premium applications</h2>
			    </div>
	  		</div>
		    <div id="productLijst">
		    {
		    	producten.map((p) =>{
		    		console.log(p.img)
		    		return(
		    		<div className="productKaart" style={{background: `url(${p.img}) no-repeat`,backgroundSize:"cover"}}>
		    		    <div className="overlay">
		    		    	<h3 className="product">{p.product}</h3>
		    		    	<div className="buttons"><img className="arrow1" src={require("../../img/arrowW.png")} alt="pijl"/></div>
		    		    </div>
				    </div>
		    		)		
		    	})
		    }
		    </div>
	  	</section>
	    
  );
}

export default Producten;
