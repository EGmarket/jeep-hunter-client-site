import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
const Banner = () => {

  const [banners, setBanners] = useState([])

  useEffect(() => {
    fetch("https://shrouded-waters-34651.herokuapp.com/common")
      .then((res) => res.json())
      .then((data) => setBanners(data));
  }, []);


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };


    return (
      <div>
        {
          banners.map(banner => <Slider {...settings}>
           <div>
             <img width= "100%" height="100%" src={banner.bnr1} alt="" />
          </div>
           <div>
             <img width= "100%" height="100%" src={banner.bnr2} alt="" />
          </div>
         
          </Slider> )
        }
      </div>
     
 
         

    );
};

export default Banner;