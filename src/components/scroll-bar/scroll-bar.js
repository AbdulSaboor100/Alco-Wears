// import React from "react";

// function ScrollBar(){
//     return(
//         <div className="main-scroll-bar">

//         </div>
//     )
// }

// export default ScrollBar;


import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import './scroll-bar.css';

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className="main-slider-cards" style={{paddingLeft:50 , position:'relative' , bottom : 100 }}>
        <Slider {...settings}>
          
          <div className="cards" id="cards">
            <label for="cards">
            <Link to={`/martial-arts/${"karate-uniforms"}`}>
            <img src="/Assets/martial-arts.jpg" />
            <h4>Martial Arts</h4>
            </Link>
            </label> 
          </div>
          
          <div className="cards">
            <img src="/Assets/boxing-mma.jpg" />
            <h4>Boxing & MMA</h4>
          </div>
          <div className="cards">
            <img src="/Assets/sports-wear.jpg" />
            <h4>Sports Wear</h4>
          </div>
          <div className="cards">
            <img src="/Assets/martial-arts.jpg" />
          </div>
          <div className="cards">
            <img src="/Assets/boxing-mma.jpg" />
          </div>
          <div className="cards">
            <img src="/Assets/sports-wear.jpg" />
          </div>
          <div className="cards">
            <img src="/Assets/martial-arts.jpg" />
          </div>
          <div className="cards">
            <img src="/Assets/boxing-mma.jpg" />
          </div>
          <div className="cards">
            <img src="/Assets/sports-wear.jpg" />
          </div>
        </Slider>
      </div>
    );
  }
}