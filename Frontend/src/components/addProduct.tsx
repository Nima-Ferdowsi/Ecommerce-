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

const AddProduct: React.FC = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state: any) => state.categoryList);
  const subcategoryList = useSelector((state: any) => state.subcategoryList);
  const selectedCategory = useSelector((state: any) => state.selectedCategory);
  const selectedSubCategory = useSelector((state: any) => state.selectedSub);
  const subItemList = useSelector((state: any) => state.subItemList);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [subItem, setSubItem] = useState("");
  const [featuresKey, setFeaturesKey] = useState("");
  const [featuresVal, setFeaturesVal] = useState("");
  const [features, setFeatures] = useState([]);

  const [img, setImg] = useState("");
  const handleChangeFile = (e: any) => {
    if (e.target.files[0]) {
      setImg(e.target.files[0]);
    }
  };

  const createProduct = () => {
   if(img){
    var fd = new FormData();
    fd.append("title", title);
    fd.append("price", price);
    fd.append("category_obj", JSON.stringify(selectedCategory));
    fd.append("subcategory", selectedSubCategory);
    fd.append("subitem", subItem);
    fd.append("image", img);
    axios({
      method: "post",
      url: `${server}/product/create`,
      data: fd,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(({ data }) => {
        //handle success
        if (data.status === 200) {
          toast.success("Post has been created");
        } else if ((data.message = "validation error")) {
          toast.warn(data.detailes[0]);
        }
      })
      .catch(() => {
        //handle error
        toast.error('Sorry there is an error from the server');
      });
   }
   else{
    toast.warn('choose image first');

   }
  };
  const newFeatures = () => {
    const data = { key: featuresKey, val: featuresVal };
    setFeatures([...features, data]);
  };
  useEffect(() => {
    dispatch(getCategoryList());
  }, []);

  useEffect(() => {
    dispatch(getSubcategoryList());
    dispatch(clearSubItem());
  }, [selectedCategory]);

  useEffect(() => {
    dispatch(getSubitemList());
  }, [selectedSubCategory]);

  return (
    <Fragment>
      <Helmet>
        <title>Add Product</title>
        <link rel="stylesheet" href="/css/addProduct.css" />
      </Helmet>

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
                  <option>'default'</option>

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
