import React from "react";

const Form = props => (
	<form onSubmit={props.handleSubmit}>
		<input type="text" name="Barcode" placeholder="Search Barcode here..."/>
		
		<button>Get Product</button>
	</form>
);

export default Form;