import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import "../css/popular.css";
import Product from "./Product";
import {server} from "../config/server.json";


const PopularProducts: React.FC = () => {
  const [product, setProduct] =useState ([]);
  const getLatestProducts = () => {
    fetch(`${server}/limit-product`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
         setProduct(data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getLatestProducts();
  }, []);
  return (
    <Fragment>
      <div className="popular_container">
        <h5>Popular Products</h5>
        {product.length == 0 ? (
          <div className="container-fluid">
            <div className="no_popular">
              <span className="text-danger">There is no product yet</span>
            </div>
          </div>
        ) : (
          <div className="container popular_container_list">
            <div className="row">
              {product.map((elem) => (
                <Product content={elem} classes=" col-lg-4 col-md-6 col-12 " />
              ))}
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default PopularProducts;
