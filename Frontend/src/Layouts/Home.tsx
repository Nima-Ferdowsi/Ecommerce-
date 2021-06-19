import React, { Fragment } from 'react';
import Navbar from './../components/Navbar';
import Carousel from './../components/Carusel';
import PopularProducts from './../components/PopularProducts';
import Offer from './../components/Offer';
import Services from './../components/Services';
import Footer from './../components/Footer';


const Home: React.FC = () => {
    return (
      <Fragment>
        <Navbar />
        <Carousel/>
        <PopularProducts/>
        <Offer/>
        <Services/>
        <Footer/>
      </Fragment>
    );
  };
  export default Home;
