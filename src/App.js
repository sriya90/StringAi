import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Carousel}  from 'react-bootstrap';
import {CarosalCustom} from './CarosalCustom';
class App extends Component {
	constructor() {
    super();
	}
	

  render() {

    return (
	<div>
	           
              <CarosalCustom varia ={'happy'}/>
			  <CarosalCustom varia ={'sad'} />
			   <CarosalCustom varia ={'angry'} />
			  <CarosalCustom varia ={'disappointed'} />
			   <CarosalCustom varia ={'embarrassed'} />
			  <CarosalCustom varia ={'drunk'} />
			  <CarosalCustom varia ={'excited'} />
			    <CarosalCustom varia ={'frustrated'} />
			   <CarosalCustom varia ={'hungry'} />
			  <CarosalCustom varia ={'drunk'} />
			  <CarosalCustom varia ={'inspired'} />
			   <CarosalCustom varia ={'lonely'} />
			<CarosalCustom varia ={'love'} />
			<CarosalCustom varia ={'reaction'} />
			<CarosalCustom varia ={'nervous'} />
			<CarosalCustom varia ={'pain'} />
				<CarosalCustom varia ={'reaction'} />
				<CarosalCustom varia ={'relaxed'} />
				<CarosalCustom varia ={'sassy'} />
				<CarosalCustom varia ={'scared'} />
				<CarosalCustom varia ={'shocked'} />
<CarosalCustom varia ={'sick'} />
<CarosalCustom varia ={'stressed'} />
<CarosalCustom varia ={'surprised'} />
<CarosalCustom varia ={'tired'} />
<CarosalCustom varia ={'unimpressed'} />

			
</div>     

    );
  }
}
export default App;
