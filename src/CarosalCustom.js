import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Carousel}  from 'react-bootstrap';


export class CarosalCustom extends Component {
constructor() {
    super();
 this.state = {
      imageSource: [],

	   index: 0,
      direction: 'next',
	  wrap:true
    };
  }
  
  componentDidMount() {
  var url = "https://api.giphy.com/v1/gifs/search?api_key=WvPYi1mCYv7eNo7T46buZ5a4oQoZ1rlj&q="+this.props.varia+"&limit=25&offset=0&rating=G&lang=en";

  fetch(url)
    .then(results => {		
      return results.json();
    })
    .then(r => {
	
			
		let pics = r.data.map((pic)=>
		{
			return(
		
			<img src ={pic.images.fixed_height_small.url} width={100} height={100}/>
		
			)
		})
		this.setState({imageSource:pics});
		this.setState({secSource:pics/2});
      console.log("state", this.state.imageSource[0])
    })
    .catch(error => console.log(error))
}

	createSecond = () => {
	  let secSource = []
	for (let i = 15; i < 25; i++) {
		secSource.push(this.state.imageSource[i]);
}
return secSource
}
  
	
render() {
    const { index, direction } = this.state;

    return (
	           <div>
<h4 align ="center">{this.props.varia}</h4>
              <Carousel >
			   <Carousel.Item >
		   	     <div class="row">
		   {this.state.imageSource}
			</div>

		   </Carousel.Item>
		   	
	     </Carousel>
     </div>

    );
  }
}