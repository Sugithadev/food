import React from "react";

const food = props => (
	<div className="food__info">
	 {	
	 	props.code && <p className="food__key"> Barcode: 
	 		<span className="food__value"> {this.state.data.code}</span>
	 	</p> 
	 }
	 { 	
	 	props.product_name && <p className="food__key"> Product Name: 
	 		<span className="food__value"> { props.product_name }	</span>
	 	</p> 
	 }
	 { 	
	 	props.ingredients_text_en && <p className="food__key"> Ingredients: 
	 		<span className="food__value"> { props.ingredients_text_en } </span>
	 	</p> 
	 }
	 { 	
	 	props.image_small_url && <p className="food__key"> Image: 
	 		<span className="food__value"> { props.image_small_url } </span>
	 </p> 
	 }
	 { 
	 	props.image_nutrition_url && <p className="food__key">Nutrition Label:
	 	<span className="food__value">{ props.image_nutrition_url } </span>
	 	</p>  
	 }
	</div>
);

export default food;
