import React from 'react';
import Slider from "react-slick";
const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <Slider {...settings}>
      <div>
        <img width= "100%" height="80%" src="https://www.wallpapertip.com/wmimgs/89-894872_luxury-red-car-background.jpg" alt="" />
      </div>
     
      
    </Slider>
    );
};

export default Banner;