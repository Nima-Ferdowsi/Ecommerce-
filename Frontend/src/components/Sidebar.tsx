import React, { Fragment, useState } from "react";
import "../css/sidebar.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import category from "../json/category.json";
import { subInterface } from "./Navbar";
import { createBrowserHistory } from "history";
import { getLocal } from './../utils/localstorage';
import { logout } from "../utils/functions";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface sideBarInterface {
  open: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
const SideBar: React.FC<sideBarInterface &RouteComponentProps> = (props) => {
  const [subCategory, setSubCategory] = useState<subInterface>({
    category: {},
    subCategory: [],
  });
  const [user, setUser] = useState(getLocal("user"));

  let classes = "";

  if (props.open) {
    classes = "sidebar_open";
  } else {
    classes = "";
  }
  const openTreeview = () => {
    var toggler = document.getElementsByClassName("caret");
    var i;

    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", function (this: any) {
        this.parentElement.querySelector(".nested").classList.toggle("open");
      });
    }
  };
  const openTreeviews = () => {
    var toggler = document.querySelectorAll(".carets");
    var i;
    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", function (this: any) {
        this.nextSibilng.classList.toggle("open");
      });
    }
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
    openTreeview();
  }, []);
  const history = createBrowserHistory({ forceRefresh: true });

  return (
    <Fragment>
      <div className={`sidebar_container  ${classes}`}>
        <div className="sidebar ">
          <ul className="mobile_menu_items">
            <li> {user.length==0 ? (
                <Link to="/login">Login</Link>
              ) : (
                <li onClick={()=>logout(props.history)}>Logout</li>
              )}</li>
            
            <li>
              <Link to="/admin/product/create">Admin Panel</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>{" "}
            </li>

            <li>
              <a className="caret"> category</a>
              <ul className="nested">
                {category.map((elem, idx) => (
                  <li key={idx}>
                    <a
                      onClick={() => getSubCategories(elem.category.name)}
                      className="caret"
                    >
                      {elem.category.name}
                    </a>
                    <ul className="nested">
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
                              <li
                                onClick={() =>
                                  history.push(
                                    `/search?category=${subCategory.category.name}&subcategory=${elem.sub_title}`
                                  )
                                }
                              >
                                <a className="caret">{elem.sub_title}</a>
                                <ul className="">
                                  {elem.items.map((item: any, idx: number) => (
                                    <li
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        history.push(
                                          `/search?category=${subCategory.category.name}&subcategory=${elem.sub_title}&subitem=${item.item_title}`
                                        );
                                      }}
                                    >
                                      {item.item_title}
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            )
                          )
                        : null}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <div
          className="clear_sidebar "
          onClick={() => {
            props.setOpen(!props.open);
          }}
        ></div>
      </div>
    </Fragment>
  );
};

export default withRouter(SideBar);
