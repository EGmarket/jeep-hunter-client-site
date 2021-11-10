import React from 'react';
import Header from '../../Common/Header/Header';
import Banner from '../Banner/Banner';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../../Common/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Footer/>
        </div>
    );
};

export default Home;