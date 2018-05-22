import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from "./components/Titles";
import Form from "./components/form";



class App extends Component {
  constructor(props) 
  {

    super(props);
    this.state = {
    
         data:[],


             
   };

  }

 

   onChange = (event) => {
    this.setState({ code: event.target.value });
  }

  


  handleSubmit = (event) => {

    event.preventDefault();
   
    const url = `https://world.openfoodfacts.org/api/v0/product/${this.state.code}.json`;
    const food = fetch(url).
     /* .then(response => response.json()).
      then(data =>this.setState({code:'',data,}))
      .catch(e => console.log('error', e));
*/
     then(Response=>Response.json()).
    then(findresponse =>
    {
      console.log(findresponse.product)
      this.setState({

data:findresponse.product,
            
              })
     }).catch(e => console.log('Product not found. Enter Right Barcode', e));
  }





  render() 
 
  {

    return (

     <div className="App">
        
      
      
       <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
             <div className="col-xs-7 form-container">
                 <form onSubmit={this.handleSubmit}>
          <input placeholder="Enter Barcode" value={this.state.code} onChange={this.onChange} />
          <button onClick={this.handleSubmit.bind(this)} >Search!</button>
            
        </form>
   
                   <ul>Product Name: {this.state.data.product_name}   </ul><br/>
       <img src={this.state.data.image_small_url} alt="" />
       <img src={this.state.data.image_nutrition_small_url } alt=""/>
     <ul>{this.state.data.ingredients_text_en}</ul>
  

   
  
             
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

    )

  }

    
}


export default App;
