import React, { Component } from 'react';
import logo from './logo.svg';
import {Carousel}  from 'react-bootstrap';
import {FirstForm} from './FirstForm';
import {SecondForm} from './SecondForm';
import {assign}        from'object-assign';

	var	  fieldValues= {
  name     : null,
  amount    : null,
  listdate      : null,
  issuedDate   : null,
invoicename :null,
repaymentDate :null,
invoiceAmount :null,
fieldset:null
}
class App extends Component {
	constructor(props) {
    super(props);
	this.nextStep = this.nextStep.bind(this)
    this.previousStep = this.previousStep.bind(this)
	this.saveValues = this.saveValues.bind(this)
	this.state ={
		step:1

	}
	}
	
saveValues (field_value) {
    return function() {
		
		console.log(field_value);
            fieldValues = Object.assign({}, fieldValues, field_value);
			console.log(fieldValues);

    }.bind(this)()
  }
  nextStep(field_value) {
this.setState({ step: this.state.step + 1 })   
  }

  previousStep() {
 
this.setState({ step: this.state.step - 1 })      
  }

  submitRegistration() {

    this.nextStep()
  }

  showStep() {
    switch (this.state.step) {
      case 1:
        return <FirstForm fieldValues={fieldValues}
                              nextStep={this.nextStep}
                              previousStep={this.previousStep}
                              saveValues={this.saveValues}
							  showOtherDiv= {true}
step ={this.state.step}							  />
    case 2 :
	 return <SecondForm fieldValues={fieldValues}
                              nextStep={this.nextStep}
                              previousStep={this.previousStep}
                              saveValues={this.saveValues} />
  
    }
	
  }
  renderprogress(){
	  switch (this.state.step){
	  case 1:
	  return (
	   <div className="progress-step-left" >
        Step {this.state.step}</div>);
		
	  case 2 :
	  return (
	   <div className="progress-step-right" >
        Step {this.state.step}</div>);
	  
	  case 3 :
	  return(
	  this.handleSubmit()
	  );
	  }
	  
  }
handleSubmit(){
	let re = /^[a-zA-Z]+$/;
	if(fieldValues.name==null && re.test(fieldValues.name)&&re.test(fieldValues.invoicename))
	{
		alert("form submited");
		
	}
}
  render() {

    return (

	  <div class="container">
		<div class="panel panel-default">
		 <div class="panel-heading panel-heading-custom" align ="center">Knox Deal Creator</div>
  <div class="panel-body">
  <div class="row">
  {this.renderprogress()}
		</div>
		 <div class="row">
		<form >
        {this.showStep()}
		</form>
		</div>
		</div>
		</div>
		
     </div>      
            


    );
  }
}
export default App;
