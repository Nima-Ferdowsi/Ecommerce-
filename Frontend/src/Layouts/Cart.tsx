import React, { Fragment, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { addLocal, getLocal } from "./../utils/localstorage";

const Cart: React.FC = () => {
  const style: React.CSSProperties = {
    marginTop: "200px",
  };

  const [cart, setCart] = useState(getLocal("cart"));


  const removeFromCart=(id:string)=>{
    
/* const localItems:[object]=getLocal('cart')
 */const filterd=cart.filter((elem:any)=>elem._id!==id)
console.log(JSON.stringify(filterd));
if(filterd){
addLocal('cart',JSON.stringify(filterd))
setCart(filterd)
}
else{
    setCart([])
}
  }

  return (
    <Fragment>
      <Navbar />

      <div className="container-fulid" style={style}>
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="cart table table-striped">
                <thead>
                  <tr>
                    <th scope="col"> </th>
                    <th scope="col">Product</th>
                    <th scope="col">Available</th>
                    <th scope="col" className="text-center">
                      Quantity
                    </th>
                    <th scope="col" className="text-right">
                      Price
                    </th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((elem: any) => (
                    <tr>
                      <td>
                        <img src="https://dummyimage.com/50x50/55595c/fff" />{" "}
                      </td>
                      <td>{elem.title}</td>
                      <td>In stock</td>
                      <td>
                        <input
                          className="form-control"
                          type="number"
                          min='1'
                          defaultValue={1}
                        />
                      </td>
                      <td className="text-right">{elem.price} €</td>
                      <td className="text-right">
                        <button className="btn btn-sm btn-danger"
                        onClick={()=>removeFromCart(elem._id)}>
                          <i className="fa fa-trash" />{" "}
                        </button>{" "}
                      </td>
                    </tr>
                  ))}

                  <tr>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td>
                      <strong>Total</strong>
                    </td>
                    <td className="text-right">
                      <strong>346,90 €</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col mb-2">
            <div className="row">
              <div className="col-sm-12  col-md-6">
                <button className="btn btn-block btn-light">
                  Continue Shopping
                </button>
              </div>
              <div className="col-sm-12 col-md-6 text-right">
                <button className="btn btn-lg btn-block btn-success text-uppercase">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Cart;
