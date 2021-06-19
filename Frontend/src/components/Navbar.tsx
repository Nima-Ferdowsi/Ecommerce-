import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import category from "../json/category.json";
import "../css/navbar.css";
import { Link } from 'react-router-dom';
const Navbar: React.FC = () => {
  const [scrollPlace, setScroll] = useState<Number | undefined>(0);
  const [subCategory, setSubCategory] = useState([]);

  const navbarWidth = (): void => {
    setScroll(window.scrollY);
  };

  const getSubCategories = (categoryTitle: string) => {
    const filterCategory = category.filter(
      (elem) => elem.category.name === categoryTitle
    );
    if (typeof filterCategory[0].subCategory == "undefined") {
      setSubCategory(null);
    } else {
      setSubCategory(filterCategory[0].subCategory);
    }
  };

  useEffect(() => {
    window.onscroll = () => {
      navbarWidth();
    };
  }, []);

  let contactNav: string;
  if (scrollPlace > 50) {
    contactNav = "nav_disappear";
  }

  return (
    <Fragment>
      <div className="navbar">
        <div className={`social_nav ${contactNav}`}>
          <div className="navbar_left_links">
            <div className="social_link">
              <a>
                <i className="fab fa-facebook"></i>
              </a>
            </div>
            <div className="social_link">
              <a>
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="social_link">
              <a>
                <i className="fab fa-telegram"></i>
              </a>
            </div>
          </div>
          <div className="navbar_right_links">
            <div className="contact_link">
              <a>
                <i className="fa fa-envelope"></i>
                <span>shop@yourdomain.com</span>
              </a>
            </div>
            <div className="contact_link">
              <a>
                <i className="fa fa-phone"></i>
                <span> (+1) 234 5678 9101</span>
              </a>
            </div>
          </div>
        </div>
        <div className="main_navbar">
          <ul className="navbar_links">
            <li>Home</li>
            <li>
              <div className="drop_down">
                Category
                <div className="drop_down_content">
                  <div className="row">
                    <ul className="category_list col-lg-3 col-md-3">
                      {category.map((elem, idx) => (
                        <li
                          key={idx}
                          onMouseEnter={() => getSubCategories(elem.category.name)}
                        >
                          {elem.category.name}
                        </li>
                      ))}
                    </ul>
                    <div className="subcategoy_container col-lg-8 col-md-8">
                      {subCategory !== null
                        ? subCategory.map((elem, index) => (
                            <div className="sub_box col-lg-3 col-md-3">
                              <h1>{elem.sub_title}</h1>
                              <ul className="sub_list">
                                {elem.items.map((item: any, idx: any) => (
                                  <li>{item.item_title}</li>
                                ))}
                              </ul>
                            </div>
                          ))
                        : null}
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>Cart</li>
            <li>Contact</li>
            <li>Login</li>
          </ul>
          <div
            style={{
              width: "35%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link to='/' className="logo">
              Selling<span>.</span>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
