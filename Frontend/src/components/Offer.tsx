import React from "react";

import "../css/offer.css";
import offerImg from "../img/slider-bg.jpg";

const Offer: React.FC = () => {
  return (
    <div className="offer_container">
      <img src={offerImg} />
      <div className='container-fluid'>
      <span>Speacial promo</span>
     <h1>Summer Sale</h1>
     <div className='row'>
         <div className='counter'>
             <span className='counter_number'>00</span>
             <span className='counter_footer'>Day</span>

         </div>
         <div className='counter'>
             <span className='counter_number'>00</span>
             <span className='counter_footer'>Hour</span>
         </div>
         <div className='counter'>
             <span className='counter_number'>00</span>
             <span className='counter_footer'>Minutes</span>

         </div>
         <div className='counter'>
             <span className='counter_number'>00</span>
             <span className='counter_footer'>Second</span>

         </div>
     </div>
      </div>

    </div>
  );
};

export default Offer;
