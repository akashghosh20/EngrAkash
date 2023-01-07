import React from 'react';
import Carousel from './Carousel/Carousel';
import Footer from './Footer/Footer';
import KeySkills from './KeySkills/KeySkills';

const Home = () => {
    return (
        <div>
          <Carousel></Carousel>
          <br></br>
          <KeySkills></KeySkills>
          <br></br>
          <Footer></Footer>
        </div>
    );
};

export default Home;