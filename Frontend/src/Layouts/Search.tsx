import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import Filter from "./../components/Filter";
import product1 from "../img/xmodel_1_bg.jpg.pagespeed.ic.MqZSBTpzh5.webp";
import product2 from "../img/los-santos-summer-special-3840x2160-gta-online-poster-4k-23052.jpg.jpg";
import product3 from "../img/pexels-leo-cardelli-1236701.jpg";

import "../css/search.css";
import Product from "../components/Product";
import { withRouter } from "react-router";
import { server } from "../config/server.json";
import { useHistory } from "react-router-dom";

const Search: React.FC = (props: any) => {
  const [product, setProduct] = useState([{}]);

  const getProduct = () => {
    fetch(`${server}/product/search${props.location.search}`)
      .then((data) => data.json())
      .then((data) => {
        setProduct(data.data);
      });
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <Fragment>
      <Navbar />
      {product.length === 0 ? (
        <div className='not_found' >
          <span className='text-danger'>I am sorry no Product found in this search </span>
        </div>
      ) : (
        <div className="container-fluid search_container">
          <div className="row">
            {/*    <div className="col-lg-4 col-md-5">
            <Filter />
          </div> */}
            <div className="col-lg-12 col-md-12 product_containers">
              <div className="row">
                {product.map((elem) => (
                  <Product content={elem} classes=" col-lg-4 col-md-6 col-12" />
                ))}
              </div>{" "}
            </div>
          </div>
        </div>
      )}

      <Footer classes={true} />
    </Fragment>
  );
};
export default withRouter(Search);
