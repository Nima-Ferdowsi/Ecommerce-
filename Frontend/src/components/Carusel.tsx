import React, { Fragment } from "react";
import ItemImg from "../img/xhero_2.jpg.pagespeed.ic.CMlBvkznrC.webp";
import "../css/Carusel.css";
import { withRouter } from "react-router-dom";
const Carousel: React.FC = (props: any) => {
  return (
    <Fragment>
      <div className="carousel  c slide carousel-fade" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="overlay" />
            <img src={ItemImg} alt="Los Angeles" width="1100" height="500" />
            <div className="carousel-info">
              <span>Shop With Us</span>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
                impedit eum dolore nostrum officia doloribus deleniti iusto
                earum, explicabo, voluptatum debitis .
              </p>
              <div className="row">
                <button onClick={() => props.history.push("/search")}>
                  Shop Now
                </button>
                <button>Club MemberShip</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(Carousel);
