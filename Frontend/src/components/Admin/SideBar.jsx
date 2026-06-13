import React from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const { toggle, show, setShow } = props;
  let classes = "";
  if (show) {
    classes = "open_admin_sidebar";
  } else {
    classes = "";
  }

  return (
    <>
      <div className={`${classes} col-lg-2  admin_sidebar_container`}>
        <div
          className="admin_sidebar_right"
          onClick={() => setShow(false)}
        ></div>
        <div className="admin_sidebar">
          <h4 className="admin_sidebat_title">
            Selling<span>.</span>
          </h4>
          <hr />
          <ul className="admin_sidebar_list">
            <li className="admin_sidebar_list_item">
              <i class="fas fa-plus-circle"></i>
              <Link to="/admin/product/create">
                {" "}
                <span>Create</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
