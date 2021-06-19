import React, { Fragment, useState } from "react";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import Filter from "./../components/Filter";
import product1 from "../img/xmodel_1_bg.jpg.pagespeed.ic.MqZSBTpzh5.webp";
import product2 from "../img/los-santos-summer-special-3840x2160-gta-online-poster-4k-23052.jpg.jpg";
import product3 from "../img/pexels-leo-cardelli-1236701.jpg";

import "../css/search.css";
import Product from "../components/Product";
const Home: React.FC = () => {
  const [product, setProduct] = useState([
    {
      title: "Wild West Hoodie",
      img: product1,
    },
    {
      title: "Wild West Hoodie",
      img: product2,
    },
    {
      title: "Wild West Hoodie",
      img: product3,
    },
    {
      title: "Wild West Hoodie",
      img: product1,
    },
    {
      title: "Wild West Hoodie",
      img: product1,
    },
    {
      title: "Wild West Hoodie",
      img: product1,
    },
  ]);
  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid search_container">
        <div className="row">
          <div className="col-lg-4 col-md-5">
            <Filter />
          </div>
          <div className="col-lg-8 col-md-7 product_containers">
            <div className="row">
              {product.map((elem) => (
                <Product content={elem} classes=" col-lg-6 col-md-12 col-12" />
              ))}
            </div>{" "}
          </div>
        </div>
      </div>
      {/*       <div style={{ height: "100vw" }} />
       */}{" "}
      <Footer classes={true} />
    </Fragment>
  );
};
export default Home;
