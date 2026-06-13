import React, { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoryList,
  getCategory,
  getSubcategoryList,
  selectSub,
  getSubitemList,
  clearSubItem,
} from "../RX/action/category";

import { server } from "../config/server.json";
import { toast } from "react-toastify";
import axios from "axios";
import { getLocal } from "./../utils/localstorage";
import { Redirect } from "react-router";
import { RootState } from "../RX/store/RootState";
const AddProduct: React.FC = () => {
  const dispatch = useDispatch();


  const categoryList = useSelector((state: RootState) => state.categoryList);
  const subcategoryList = useSelector(
    (state: RootState) => state.subcategoryList
  );
  const selectedCategory = useSelector(
    (state: RootState) => state.selectedCategory
  );
  const selectedSubCategory = useSelector(
    (state: RootState) => state.selectedSub
  );

  const subItemList = useSelector((state: RootState) => state.subItemList);

  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [subItem, setSubItem] = useState<string>("");
  const [featuresKey, setFeaturesKey] = useState<string>("");
  const [featuresVal, setFeaturesVal] = useState<string>("");
  const [features, setFeatures] = useState([]);
  const [progressLoaded, setProgressLoaded] = useState(10);
  const [onProgressing, setOnprogress] = useState<Boolean>(false);
  const [img, setImg] = useState("");

  const handleChangeFile = (e: any) => {
    if (e.target.files[0]) {
      setImg(e.target.files[0]);
    }
  };
  const createProduct = () => {
    if (onProgressing == false) {
      if (img) {
        var fd = new FormData();
        fd.append("title", title);
        fd.append("price", price);
        fd.append("category_obj", JSON.stringify(selectedCategory));
        fd.append("subcategory", selectedSubCategory);
        fd.append("subitem", subItem);
        fd.append("image", img);
        fd.append("features_obj", JSON.stringify(features));
        fd.append("createdBy", getLocal("user").result.email);

        axios({
          method: "post",
          url: `${server}/product/create`,
          data: fd,
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: (evt) => {
            if (evt.lengthComputable) {
              let loaded: number = parseInt(evt.loaded);
              let total: number = parseInt(evt.total);
              let percentComplete = Math.floor((loaded / total) * 100);
              setProgressLoaded(percentComplete);
              setOnprogress(true);
            }
          },
        })
          .then(({ data }) => {
            //handle success

            if (data.status === 200) {
              toast.success("Post has been created");
            } else if (data.status === 500) {
              toast.error("Sorry there is an error from the server");
            } else if ((data.message = "validation error")) {
              toast.warn(data.detailes[0]);
            } else if ((data.message = "upload image failed")) {
              toast.error("there is a problem with uploading image");
            }
            setOnprogress(false);
          })
          .catch(() => {
            //handle error
            toast.error("Sorry there is an error from the server");
          });
      } else {
        toast.warn("choose image first");
      }
    } else {
      toast.warn("please wait until progress is done");
    }
  };
  const newFeatures = () => {
    const data = { key: featuresKey, val: featuresVal };
    setFeatures([...features, data]);
  };

  useEffect(() => {
    //get categoryList
    dispatch(getCategoryList());
  }, []);

  useEffect(() => {
    //function called after selected_category changed  
    dispatch(getSubcategoryList());
    dispatch(clearSubItem());
  }, [selectedCategory]);

  useEffect(() => {
    //get subItems after selecting subItems
    dispatch(getSubitemList());
  }, [selectedSubCategory]);

  const user = getLocal("user");
  if (user.length === 0) {
    return <Redirect to="/login" />;
  }
  return (
    <Fragment>
      <Helmet>
        <title>Add Product</title>
        <link rel="stylesheet" href="/css/addProduct.css" />
      </Helmet>
      {onProgressing == true ? (
        <div className="upload_percent_container">
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              style={{ width: `${progressLoaded}% ` }}
              aria-valuenow={progressLoaded}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              {progressLoaded}%
            </div>
          </div>
        </div>
      ) : null}
      <div className="form_container">
        <div className="row inputs_container">
          <div className="left_box col-lg-6 col-md-6 col-12">
            <h5 className="box_title">Add Product</h5>

            <div className="input_row">
              <label htmlFor="">Product Name</label>
              <input
                className="form-control"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="input_row">
              <label htmlFor="">Price</label>
              <input
                type="number"
                min="0"
                className="form-control"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="input_row">
              <label htmlFor="">Amount</label>
              <input
                type="number"
                min="0"
                className="form-control"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="row">
              <div className="input_row col-lg-4">
                <label htmlFor="">category</label>

                <select
                  className="custom-select"
                  onChange={(e) => {
                    dispatch(
                      getCategory(
                        e.target.value,
                        e.target.options[e.target.selectedIndex].text
                      )
                    );
                  }}
                >
                  <option value="">default</option>
                  {categoryList.map((elem: any) => (
                    <option value={elem.category.id}>
                      {elem.category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input_row col-lg-4">
                <label htmlFor="">Subcategory</label>

                <select
                  className="custom-select"
                  onChange={(e) => {
                    dispatch(selectSub(e.target.value));
                  }}
                >
                  <option value="">default</option>

                  {subcategoryList.map((elem: any) => (
                    <option value={elem.sub_title}>{elem.sub_title}</option>
                  ))}
                </select>
              </div>

              <div className="input_row col-lg-4">
                <label htmlFor="">subitem</label>
                <select
                  className="custom-select"
                  onChange={(e) => setSubItem(e.target.value)}
                >
                  <option value="">default</option>

                  {"items" in subItemList
                    ? subItemList.items.map((elem: any) => (
                        <option value={elem.item_title}>
                          {elem.item_title}
                        </option>
                      ))
                    : null}
                </select>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 upload_container">
            <div className="upload_sec">
              <label>
                <i className="fas fa-cloud-upload-alt upload-icon"></i>
                <input
                  type="file"
                  accept="image/x-png,image/jpeg"
                  id="icon-button-file"
                  onChange={handleChangeFile}
                />
              </label>
            </div>
            <div className="row">
              <div className="input_row col-lg-6">
                <label htmlFor="">Features Key</label>

                <input
                  className="form-control"
                  onChange={(e) => setFeaturesKey(e.target.value)}
                ></input>
              </div>
              <div className="input_row col-lg-6">
                <label htmlFor="">Features</label>

                <input
                  className="form-control"
                  onChange={(e) => setFeaturesVal(e.target.value)}
                ></input>
              </div>
              <div className="input_row col-lg-12">
                <button
                  onClick={newFeatures}
                  className="btn add_btn btn-warning btn-block"
                >
                  Add Feature
                </button>
              </div>
            </div>
          </div>
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th>Features Key</th>
                <th>Features</th>
              </tr>
            </thead>
            <tbody>
              {features.length !== 0
                ? features.map((elem) => (
                    <tr>
                      <td>{elem.key}</td>
                      <td>{elem.val}</td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
          <button
            onClick={createProduct}
            className="btn add_btn btn-success btn-block"
          >
            Add Product
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default AddProduct;
