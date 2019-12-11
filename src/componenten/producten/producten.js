import React from 'react';
import "./producten.css";

const Producten = () => {
	const producten = [
		{
			product: "Bakery",
			img: require("../../img/producten/bakery.png"),
			spec: "hero"
		},
		{
			product: "Confectionary",
			img: require("../../img/producten/confectionary.png"),
			spec: ""
		},
		{
			product: "Spreads",
			img: require("../../img/producten/spreads.png"),
			spec: ""
		},
		{
			product: "Frying",
			img: require("../../img/producten/frying.png"),
			spec: ""
		},
		{
			product: "Culinary",
			img: require("../../img/producten/culinary.png"),
			spec: ""
		},
		{
			product: "Non-food Products",
			img: require("../../img/producten/non-food.png"),
			spec: ""
		},
		{
			product: "Dairy Fat Alternatives",
			img: require("../../img/producten/dairyfatalts.png"),
			spec: ""
		},
		{
			product: "Special Ingredients",
			img: require("../../img/producten/spec_ingr.png"),
			spec: ""
		},
		{
			product: "Infant Nutrition",
			img: require("../../img/producten/dairy_fat_alt.png"),
			spec: "hero2"
		},
		{
			product: "Spray Oil",
			img: require("../../img/producten/sprayoil.png"),
			spec: "hero3"
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
		    		return(
		    		<div className={`productKaart ${p.spec}`} style={{background: `url(${p.img}) no-repeat`,backgroundSize:"cover",backgroundPosition:"top"}}>
		    		    <div className="overlay gridfix">
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
