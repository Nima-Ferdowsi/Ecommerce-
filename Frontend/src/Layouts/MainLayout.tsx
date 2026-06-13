import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carusel";
import PopularProducts from "../components/PopularProducts";
import Offer from "../components/Offer";
import Services from "../components/Services";
import Footer from "../components/Footer";
import { withRouter } from "react-router-dom";
import {RouteComponentProps} from 'react-router';

const Home: React.FC<RouteComponentProps>  = (props) => {
 
  let footerClass=false

  if(props.location.pathname==="/search" || props.location.pathname==="/product/:id" || props.location.pathname==="/cart"){
    footerClass=true
  }
  else{
    footerClass=false
  }
  return (
    <Fragment>
      <Navbar />
      {props.children}
      <Footer classes={footerClass}/>
    </Fragment>
  );
};
export default withRouter(Home);