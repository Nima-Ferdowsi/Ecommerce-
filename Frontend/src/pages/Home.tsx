import React, { Fragment } from "react";
import Carousel from "../components/Carusel";
import PopularProducts from "../components/PopularProducts";
import Offer from "../components/Offer";
import Services from "../components/Services";


const Home: React.FC = () => {
 

  return (
    <Fragment>
      <Carousel />
      <PopularProducts /> 
      <Offer />
      <Services />
    </Fragment>
  );
};
export default Home;
