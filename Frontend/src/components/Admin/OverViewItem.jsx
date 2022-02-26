import React from "react";

const OverviewItem = (props) => {
    const {icon,bg  , title , percent  , price}=props
  return (
    <>
      <div className="overview_card col-lg-3 col-md-6 col-sm-6 col-12">
        <div className="overview_left">
          <p className=" overview_title text-sm mb-0 text-uppercase font-weight-bold">
           {title}
          </p>
          <h5 className="font-weight-bolder">{price}$</h5>
          <p class="mb-2">
            <span class="text-success text-sm font-weight-bolder">+{percent}%</span>
            since yesterday
          </p>
        </div>
        <div className="overview_right">
    
            <i style={{backgroundColor:bg}} className={icon}></i>
        </div>
      </div>
    </>
  );
};

export default OverviewItem;
