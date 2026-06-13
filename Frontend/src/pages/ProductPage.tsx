import React, { Fragment, useState } from "react";

import imgs from "../img/xmodel_1_bg.jpg.pagespeed.ic.MqZSBTpzh5.webp";
import "../css/productView.css";
import { server } from "../config/server.json";
import { withRouter } from "react-router";
import { useEffect } from "react";
import { addLocal, getLocal } from '../utils/localstorage';
import { toast } from 'react-toastify';
import ImgLoader from "../components/ImgLoader";
const ProductPage: React.FC = (props: any) => {
  const [product, setProduct] = useState({
    features: [{key:'',val:''}],
    _id: "60cee01f01a08131004a2072",
    title: "nike",
    price: 888,
    image: "image-f0626a63-5097-44c6-b705-4a2502ce1b1c--1624170527748.jpg",
    category: {
      id: "8c1b59f4-3f0d-4554-8626-a8d4886cb735",
      name: "Woman",
    },
    subcategory: "Clothing",
    subitem: "Skirt",
  });

  const getProduct = () => {
    fetch(`${server}/product/${props.match.params.id}`)
      .then((data) => data.json())
      .then((data) => {
        setProduct(data.data);
      });
  };
  useEffect(() => {
    getProduct();
  }, []);
  console.log(product);
  const addToCart = (data: any) => {
    const localItems: [object] = getLocal("cart");

    const filter = localItems.filter((elem: any) => elem._id === data._id);
    console.log(filter);
    if (filter.length >= 1) {
      toast.warn("You already have this item in your cart");
    } else {
      localItems.push(data);
      addLocal("cart", JSON.stringify(localItems));
      toast.success("product added in your cart");

    }
  };
  return (
    <Fragment>
      <div className="container product_container"> 
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="product_view_img_container">
{/*               <img className="product_view_img" src={`${product.image}`}  />
 */}              <ImgLoader classes='"product_view_img"' img={product.image}/>
            </div>
          </div>
          <div className="col-lg-6 col-md-6" style={{ marginTop: "40px" }}>
            <div className="main_info">
              <h1>{product.title}</h1>
              <span>{product.price}$</span>
              <div id="status"></div>
              <div className="rating">
                <legend className="font-width-light">Please rate:</legend>
                <input type="radio" id="star5" name="rating" value="5" />
                <label htmlFor="star5" title="Rocks!">
                  5 stars
                </label>
                <input type="radio" id="star4" name="rating" value="4" />
                <label htmlFor="star4" title="Pretty good">
                  4 stars
                </label>
                <input
                  type="radio"
                  checked
                  id="star3"
                  name="rating"
                  value="3"
                />
                <label htmlFor="star3" title="Meh">
                  3 stars
                </label>
                <input type="radio" id="star2" name="rating" value="2" />
                <label htmlFor="star2" title="Kinda bad">
                  2 stars
                </label>
                <input type="radio" id="star1" name="rating" value="1" />
                <label htmlFor="star1" title="Sucks big time">
                  1 star
                </label>
              </div>
            </div>
            <div className="table-responsive">
              <table className="product_table table table-dark table-hover table-striped">
                <thead>
                  <tr>
                    <th>Features Key</th> 
                    <th>Features</th>
                  </tr>
                </thead>
                <tbody>
                 {product.features.map(elem=>(
                      <tr>
                      <td>{elem.key}</td>
                      <td>{elem.val}</td>
                    </tr> 
                 ))}
                </tbody>
              </table>
            </div>
            <button onClick={()=>addToCart(product)} className="product_add btn ">Add To Cart</button>
          </div>
        </div>
      </div>
     </Fragment>
  );
};

export default withRouter(ProductPage);
