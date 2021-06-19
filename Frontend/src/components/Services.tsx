import React, { Fragment, CSSProperties } from "react";
import  services  from "../json/services.json";
export interface services_Css_Interface {
  container?: CSSProperties;
  containerInfo?: CSSProperties;
  containerTitle?: CSSProperties;
  icon?: CSSProperties;
  row?: CSSProperties;
}

const Services: React.FC = () => {
  const servicesCss: services_Css_Interface = {
    container: {
      paddingTop: "70px",
      paddingBottom: "70px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#f8f9fa",
    },
    containerInfo: {
      color: "#adb5bd",
      letterSpacing: ".2em",
      textTransform: "uppercase",
      fontWeight: 700,
      fontSize: "15px",
    },
    containerTitle: {
      wordSpacing: "2px",
      fontWeight: 900,
      fontSize: "32px",
    },
    icon: {
      color: "orange",
      fontSize: "45px",
      marginRight: "20px",
    },
    row: { display: "flex", marginTop: "25px" },
  };
  return (
    <Fragment>
      <div className="container-fluid" style={servicesCss.container}>
        <span style={servicesCss.containerInfo}>OUR SERVICES</span>
        <span style={servicesCss.containerTitle}>We offer Services</span>
        <div className="container" style={servicesCss.container}>
          <div className="row">
            {services.map((elem) => (
              <div className="col-lg-4 col-md-6" style={servicesCss.row}>
                <span style={servicesCss.icon}>
                  <i className={elem.icon}></i>
                </span>
                <div>
                  <h4>{elem.title}</h4>
                  <p>
                  {elem.text}
                  </p>
                </div>
              </div>
            ))} 
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Services;
