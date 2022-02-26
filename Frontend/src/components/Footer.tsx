import React from "react";
import "../css/Footer.css";



export interface FooterProps {
  classes?: boolean;
}
const Footer: React.FC<FooterProps> = (props) => {
  let classes: string;
  if (props.classes) {
    classes = "footer_down";
  } else {
    classes = "";
  }
console.log(props)
  return (
    <footer className={classes}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer_col">
            <h1 className="footer_title">winkel</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 footer_col">
            <span className="footer_title">Menu</span>
            <ul className="menu_links">
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Shop</a>
              </li>
              <li>
                <a>Contact us</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer_col">
            <span className="footer_title">Help</span>
            <ul className="menu_links">
              <li>
                <a>Shopping information</a>
              </li>
              <li>
                <a>Return and Exchange</a>
              </li>
              <li>
                <a>Terms & Conditions</a>
              </li>
              <li>
                <a>Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer_col">
            <span className="footer_title">Have question?</span>
            <ul className="menu_links">
              <li>
                <a>Shopping information</a>
              </li>
              <li>
                <a>Return and Exchange</a>
              </li>
              <li>
                <a>Terms & Conditions</a>
              </li>
              <li>
                <a>Privacy Policy</a>
              </li>
            </ul>
            <ul className="footer_social">
              <li>
                <i className="fab fa-instagram"></i>
              </li> 
              <li>
                <i className="fab fa-telegram-plane"></i>
              </li>
              <li>
                <i className="fab fa-facebook-f"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default  Footer;
