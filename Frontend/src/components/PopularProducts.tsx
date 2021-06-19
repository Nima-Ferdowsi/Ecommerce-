import React, { Fragment } from "react";
import { useState } from "react";
import "../css/popular.css";
import product1 from "../img/xmodel_1_bg.jpg.pagespeed.ic.MqZSBTpzh5.webp";
import product2 from "../img/los-santos-summer-special-3840x2160-gta-online-poster-4k-23052.jpg.jpg"

import product3 from "../img/pexels-vlad-alexandru-popa-1402787.jpg";
import Product from "./Product";

const PopularProducts: React.FC = () => {
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
  
  ]);
  return (
    <Fragment>
      <div className="popular_container">
        <h5>Popular Products</h5>
        <div className="container">
          <div className="row">
            {product.map((elem) => (
             <Product content={elem} classes=' col-lg-4 col-md-6'/>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PopularProducts;
