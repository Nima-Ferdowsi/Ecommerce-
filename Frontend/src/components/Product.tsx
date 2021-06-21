import React from "react";
import { server } from "../config/server.json";
import { addLocal, getLocal } from "./../utils/localstorage";
import { toast } from "react-toastify";
export interface ProductProps {
  content: any;
  classes?: string;
}

const Product: React.FC<ProductProps> = ({ content, classes }) => {
  console.log(content);
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
    <div className={`product ${classes}`}>
      <div className="content">
        <img src={`${server}/uploads/${content.image}`} />
        <div className="card_footer">
          <h2 className="product_title mt-2">{content.title}</h2>
          <div className="row">
            <span
              style={{ fontSize: "20px" }}
              className="col-lg-12 col-md-12 col-12 mt-2 mb-3"
            >
              ${content.price}
            </span>
            {/*  <del
            style={{ fontSize: "20px" }}
            className="col-lg-6 col-md-6 col-6  mt-2 mb-3"
          >
            $120
          </del> */}
          </div>
          <div className="row">
            <button onClick={() => addToCart(content)}>Cart</button>
            <button>View</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
