import React from 'react';
import "./producten.css";

const Producten = () => {
	const producten = [
		{
			product: "Cargo Holds",
			img: require("../../img/producten/CH.jpg"),
			spec: "hero"
		},
		{
			product: "Underwater Hull",
			img: require("../../img/producten/UH.jpg"),
			spec: ""
		},
		{
			product: "Topsides",
			img: require("../../img/producten/TS.jpeg"),
			spec: ""
		},
		{
			product: "Cargo Tanks",
			img: require("../../img/producten/CT.jpg"),
			spec: ""
		},
		{
			product: "Decks",
			img: require("../../img/producten/ships-deck.jpg"),
			spec: ""
		},
		{
			product: "Portable Watertanks",
			img: require("../../img/producten/PW.jpg"),
			spec: ""
		},
		{
			product: "Ballast Tanks",
			img: require("../../img/producten/BT.jpg"),
			spec: ""
		},
		{
			product: "Anti Foulings",
			img: require("../../img/producten/spec_ingr.png"),
			spec: ""
		},
		{
			product: "Primers",
			img: require("../../img/producten/Primer.jpg"),
			spec: "hero2"
		},
		{
			product: "Cosmetic Finishers",
			img: require("../../img/producten/CF.jpg"),
			spec: "hero3"
		},
	]
    return (
	  	<section>
	  		<div className="gradientBckgr">
	  			<div className="container">
		    	<h2>Our premium Products</h2>
			    </div>
	  		</div>
		    <div id="productLijst">
		    {
		    	producten.map((p) =>{
		    		return(
		    		<div className={`productKaart ${p.spec}`} style={{background: `url(${p.img}) no-repeat`,backgroundSize:"cover",backgroundPosition:"center"}}>
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
