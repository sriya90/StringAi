import React, { Component } from 'react';
export default class carousel extends React.Component {
  constructor(props) {
    super(props);
      const slider_pics=[];  
       for (let i = 0; i < 10; i++) {
         slider_pics.push(<React_Boostrap_Carousel />);
    }
     this.state = {slider_pics};    
  }
    render() {
         let data = this.props.data;
      return(
        <div>
          <React_Boostrap_Carousel animation={true} className="carousel-fade">
              {data.slider_pics.map((slider_pic, index) => (
                <div  key={index}>
                <img  style={{heght:200, width:1000}} src={slider_pic} />
                </div>
              ))}
          </React_Boostrap_Carousel>
        </div>
      )
    }
};
export default carousel;