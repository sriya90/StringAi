import React, { Component } from 'react';
export class SecondForm extends Component {
constructor() {
    super();
	this.state = {
		 
		errormsgnameinvoice:'',
		errormsgdate:'',
		errormsgdater:'',
		erroramt:''
		
}
}


  updateName(e)
  {
	  this.setState({errormsgnameinvoice :''});  
var name = e.target.value;
let re = /^[a-zA-Z]+$/;
console.log(name);
console.log(re.test(name));
var myBoolean = true;
var myBoolean=re.test(name);
if(name.length ==0)
{	e.target.value='';
	 this.setState({errormsgnameinvoice:    
        <small class="text-danger">
          Must be 8-20 characters long.
        </small>      
      
	  });
	  
	   return;
}
 else if (re.test(name)===false)
{

	this.setState({errormsgnameinvoice :     
        <small  class="text-danger">
          Name has special charectors
        </small>      
      
	  })
	  return;
	
}

	this.setState({errormsgnameinvoice :''});  
	this.props.fieldValues.invoicename = e.target.value;
	
  }  
  
   updateId(e)
  {
	 var now = new Date();
	  var noasdw = new Date(e.target.value);
	  console.log(noasdw);
	  console.log(now);
	  this.props.fieldValues.issuedDate = e.target.value;
if (noasdw > now) {
	
	this.setState({errormsgdate :     
        <small  class="text-danger">
          Cannot be a future Date
        </small>      
      
	  });
	   return; 
  }
  
  this.setState({errormsgdate :''});  
	this.props.fieldValues.issuedDate = e.target.value;
  }
    updateAmount(e)
	{
		
		if(Number(e.target.value)>Number(this.props.fieldValues.amount))
	  this.setState({amounterrormsg :     
        <small  class="text-danger">
          invoice amount must be greater than deal amount 
        </small>      
      
	  });
	this.props.fieldValues.invoiceAmount = e.target.value;
	
	}
  updateRd(e)
  {
	  var now = new Date();
	  var rd = new Date(e.target.value);
	 
	 
	this.props.fieldValues.repaymentDate = e.target.value;
	  var id = new Date(this.props.fieldValues.issuedDate);
	  var ld = new Date(this.props.fieldValues.listdate);
if (rd < now) {
	
	this.setState({dateerrormsg :     
        <small  class="text-danger">
          Cannot be a Previous Date
        </small>      
      
	  });
	   return;
  }else if(rd<=id)
  {
	  this.setState({dateerrormsg :     
        <small  class="text-danger">
          Cannot be equal or less than rd
        </small>      
      
	  });
	   return;
	  
  }
  
  this.setState({dateerrormsgrd :''});  
	this.props.fieldValues.repaymentDate = e.target.value;
  }
 
 clickprev  = () =>  {
	if(this.props.fieldValues.issuedDate !=null)
	{
	this.props.fieldValues.fieldset=
	<div >
	   <h3 align="center">VALUES IN INVOICE</h3>
         <div class="form-group">
          <label for="inputEmail4">ISSUE DATE*</label>
           
            <input type="text" class="form-control" value={this.props.fieldValues.issuedDate}  disabled/>
				
          </div>
		 
          <div class="form-group">
            <label for="Date" >REPAYMENT DATE*</label>
            <input type="date"  class="form-control"  defaultValue={this.props.fieldValues.repaymentDate}  disabled/>
				
          </div>
          
              <div class="form-group">
			  <label for="Date">AMOUNT*</label>
            <input type="number"  class="form-control"  defaultValue={this.props.fieldValues.invoiceAmount}  disabled />
     
		  </div>
		  </div>;
	}
	 this.props.saveValues(this.props.fieldValues);
    this.props.previousStep();
  }
   clicknext  = () =>  {
	
	
	this.props.saveValues(this.props.fieldValues);
    this.props.nextStep();
  }
  
   errorpresent  = () =>  {
	
	if(this.state.errormsgnameinvoice)
		return false;
	else
		return false;
  }
  
  
render() {
   

    return (
	         <div class="container">
       <h3 align ="center">VALUES IN INVOICE</h3>
	   <div class="row">
	   <div id="customDivnew">
	   <div class="form-row">
         <div class="form-group col-md-6">
            <label>DEAL NAME*</label>
            <input type="text" class="form-control"  defaultValue={this.props.fieldValues.invoicename} onChange ={this.updateName.bind(this)} />
				{this.state.errormsgnameinvoice}         
		 </div>
		  
          <div class="form-group col-md-6">
            <label>ISSUED DATE*</label>
            <input type="date"  class="form-control"  defaultValue={this.props.fieldValues.issuedDate} onChange ={this.updateId.bind(this)}/>
          {this.state.errormsgdate}	
		  </div>
		  </div>
		   <div class="form-row">
          <div class="form-group col-md-6">
            <label>REPAYMENT DATE*</label>
            <input type="date"  class="form-control"  ref="email" defaultValue={this.props.fieldValues.repaymentDate} onChange ={this.updateRd.bind(this)}/>
			{this.state.errormsgdater}	         
		 </div>
		  <div class="form-group col-md-6">
            <label>INVOICE AMOUNT*</label>
            <input type="number" className="form-control"  defaultValue={this.props.fieldValues.invoiceAmount} onChange ={this.updateAmount.bind(this)} />
          {this.state.amounterrormsg}	 
		  </div>
		  
		  </div>
		  
		 </div>
		
		 </div>
		  <div class="row">
		    <button className="btn -default pull-left" onClick={this.clickprev}><span class="glyphicon glyphicon-chevron-left"></span> Back</button>
            <button className="btn -default pull-rightnw" onClick={this.clicknext}  disabled={this.state.errorpresent}>Submit</button>
   </div>
      </div>

    );
  }
}