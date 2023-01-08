import React from 'react';
import About from '../About/About';
import Carousel from './Carousel/Carousel';
import Footer from './Footer/Footer';
import Gallery from './Galleery/Gallery';
import KeySkills from './KeySkills/KeySkills';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div>
          <Carousel></Carousel>
          <br></br>
          <About></About>
          <br></br>
          <KeySkills></KeySkills>
          <br></br>
          <Gallery></Gallery>
          <br></br>
          <Projects></Projects>
          <br></br>
          <Footer></Footer>
         
        </div>
    );
};

export default Home;