import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import category from "../json/category.json";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import { createBrowserHistory } from "history";
import SideBar from "./Sidebar";
import { getLocal } from "./../utils/localstorage";
import { logout } from "../utils/functions";

export interface subInterface {
  category?: { id?: string; name?: string };
  subCategory?: any;
}

const Navbar: React.FC = (prop:any) => {
  const [scrollPlace, setScroll] = useState<Number | undefined>(0);
  const [subCategory, setSubCategory] = useState<subInterface>({
    category: {},
    subCategory: [],
  });

  const [openSidebar, setOpenSidebar] = useState(false);
  const [user, setUser] = useState(getLocal("user"));
  
  const navbarWidth = (): void => {
    setScroll(window.scrollY);
  };

  const getSubCategories = (categoryTitle: string) => {
    const filterCategory = category.filter(
      (elem) => elem.category.name === categoryTitle
    );
    if (typeof filterCategory[0].subCategory == "undefined") {
      setSubCategory({
        category: {},
        subCategory: [],
      });
    } else {
      setSubCategory(filterCategory[0]);
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
  const history = createBrowserHistory({ forceRefresh: true });

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
            <li>
              <div className="drop_down">
                Category
                <div className="drop_down_content">
                  <div className="row">
                    <ul className="category_list col-lg-3 col-md-3">
                      {category.map((elem, idx) => (
                        <li
                          key={idx}
                          onMouseEnter={() =>
                            getSubCategories(elem.category.name)
                          }
                        >
                          {elem.category.name}
                        </li>
                      ))}
                    </ul>
                    <div className="subcategoy_container col-lg-8 col-md-8">
                      {subCategory.subCategory.length !== 0 ? (
                        <li
                          onClick={() =>
                            history.push(
                              `/search?category=${subCategory.category.name}`
                            )
                          }
                        >
                          See All
                        </li>
                      ) : null}
                      {subCategory.subCategory.length !== 0
                        ? subCategory.subCategory.map(
                            (elem: any, index: number) => (
                              <div className="sub_box col-lg-3 col-md-3">
                                <h1
                                  onClick={() =>
                                    history.push(
                                      `/search?category=${subCategory.category.name}&subcategory=${elem.sub_title}`
                                    )
                                  }
                                  data-category={subCategory.category.name}
                                >
                                  {elem.sub_title}
                                </h1>
                                <ul className="sub_list">
                                  {elem.items.map((item: any, idx: number) => (
                                    <li
                                      onClick={() =>
                                        history.push(
                                          `/search?category=${subCategory.category.name}&subcategory=${elem.sub_title}&subitem=${item.item_title}`
                                        )
                                      }
                                      data-category={subCategory.category.name}
                                      data-sub={elem.sub_title}
                                    >
                                      {item.item_title}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )
                          )
                        : null}
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              {user.length==0 ? (
                <Link to="/login">Login</Link>
              ) : (
                <li onClick={()=>logout(prop.history)}>Logout</li>
              )}
            </li>
            <li>
              <Link to="/admin/product/create">Admin Panel</Link>
            </li>
          </ul>
          <span
            className="sidebar_icon"
            onClick={() => setOpenSidebar(!openSidebar)}
          >
            <i className="fa fa-bars"></i>
          </span>

          <div
            style={{
              width: "35%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link to="/" className="logo">
              Selling<span>.</span>
            </Link>
          </div>
        </div>
      </div>
      <SideBar open={openSidebar} setOpen={setOpenSidebar} />
    </Fragment>
  );
};

export default withRouter(Navbar);
