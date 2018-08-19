import React, { Component } from 'react';

export class FirstForm extends Component {
constructor(props) {
    super(props);
	 this.state = {
		 
		 errormsgname:'',
		 dateerrormsg:'',
		 amounterrormsg:'',
		 otherdiv:''
}
}
secondfunction()
{
	console.log("yahan");
	console.log(this.props.fieldValues.issuedDate);
	console.log(this.props.fieldValues.repaymentDate);
	console.log(this.props.fieldValues.invoiceAmount);
	if(!this.props.fieldValues.issuedDate === null )
	{
	this.setState({otherdiv:
	<div>
	   <h3>VALUES IN INVOICE</h3>
         <div class="form-group">
          <label for="inputEmail4">ISSUE DATE*</label>
           
            <input type="text" class="form-control" value={this.props.fieldValues.issuedDate}  disabled/>
			 {this.state.errormsgname}	
          </div>
		 
          <div class="form-group">
            <label for="Date" >REPAYMENT DATE*</label>
            <input type="date"  class="form-control"  defaultValue={this.props.fieldValues.repaymentDate}  disabled/>
			{this.state.dateerrormsg}	
          </div>
          
              <div class="form-group">
			  <label for="Date">AMOUNT*</label>
            <input type="number"  class="form-control"  defaultValue={this.props.fieldValues.invoiceAmount}  disabled />
          {this.state.amounterrormsg}
		  </div>
		  </div>
	});
	return this.state.otherdiv;
	}
}
 click  = () =>  {

	 this.props.saveValues(this.props.fieldValues);
    this.props.nextStep();
  }
  updateName(e)
  {
var name = e.target.value;
 var regex = new RegExp("^[a-zA-Z]*$");
 let re = /^[a-zA-Z]+$/;
console.log(name);
console.log(re.test(name));
var myBoolean = true;
var myBoolean=re.test(name);
if(name.length ==0)
{	e.target.value='';
	 this.setState({errormsgname :     
        <small id="passwordHelp" class="text-danger">
          Must be 8-20 characters long.
        </small>      
      
	  });
	   return;
}else if (re.test(name)===false)
{
	this.setState({errormsgname :     
        <small  class="text-danger">
          Name has special charectors
        </small>      
      
	  })
	  return;
	
}

	this.setState({errormsgname :''});  
	this.props.fieldValues.name = e.target.value;
	
  }
    updateDate(e)
  {
	  var now = new Date();
	  var noasdw = new Date(e.target.value);
	  console.log(noasdw);
	  console.log(now);
	  
if (noasdw > now) {
	
	this.setState({dateerrormsg :     
        <small  class="text-danger">
          Cannot be a future Date
        </small>      
      
	  });
	   return;
  // selected date is in the past
}
	this.setState({dateerrormsg :''});  
	this.props.fieldValues.listdate = e.target.value;
	
  }
     updateAmount(e)
  {
var mybool=true;
var regex = new RegExp("[1-9]*$");
mybool=regex.test(e.target.value);
console.log(mybool);
  if(e.target.value<0 || mybool ==false)
	  this.setState({amounterrormsg :     
        <small  class="text-danger">
          Enter Valid Amount
        </small>      
      
	  });
	this.props.fieldValues.amount = e.target.value;
	
  }
  
  
render() {
   

    return (

	
	
	<div class="container">
	<div class ="row">
	         <div  id="first">
        <h3>CREATE A DEAL</h3>
		
         <div class="form-group">
          <label for="inputEmail4">NAME*</label>
           
            <input type="text" class="form-control" value={this.props.fieldValues.name} onChange ={this.updateName.bind(this)} required/>
			 {this.state.errormsgname}	
          </div>
		 
          <div class="form-group">
            <label for="Date" >DATE*</label>
            <input type="date" class="form-control"  defaultValue={this.props.fieldValues.listdate} onChange ={this.updateDate.bind(this)} />
			{this.state.dateerrormsg}	
          </div>
          
              <div class="form-group">
			  <label for="Date">AMOUNT*</label>
            <input type="number" class="form-control"  defaultValue={this.props.fieldValues.amount} onChange ={this.updateAmount.bind(this)} />
          {this.state.amounterrormsg}
		  </div>
         
            
         
      </div>
	  <div id ="second">
	  {this.props.fieldValues.fieldset}
	  </div>
	  </div>
	   <div className="row" position="relative" align ="center">
	 		<button type="button" class="btn btn-primary-custom" align="center"  onClick={this.click}>Next <span class="glyphicon glyphicon-chevron-right"></span></button>
			</div>
</div>

    );
  }

}