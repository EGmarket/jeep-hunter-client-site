import React from "react";
import Header from "../../Common/Header/Header";
import Banner from "../Banner/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../Common/Footer/Footer";
import CarService from "../CarService/CarService";
import CarInfo from "../CarInfo/CarInfo";
import Reviews from "../Reviews/Reviews";


const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <CarInfo />
      <CarService />
      <Reviews/>
      <Footer />
    </div>
  );
};

export default Home;
