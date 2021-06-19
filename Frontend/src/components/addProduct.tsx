import React, { Fragment, useEffect,useState } from "react";
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

const AddProduct: React.FC = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state: any) => state.categoryList);
  const subcategoryList = useSelector((state: any) => state.subcategoryList);
  const selectedCategory = useSelector((state: any) => state.selectedCategory);
  const selectedSubCategory = useSelector((state: any) => state.selectedSub);
  const subItemList = useSelector((state: any) => state.subItemList);
 
  const [title,setTitle]=useState('')
  const [price,setPrice]=useState('')

  c/* onst createProduct=()=>{

  } */

  useEffect(() => {
    dispatch(getCategoryList());
  }, []);




  useEffect(() => {
    dispatch(getSubcategoryList());
    dispatch(clearSubItem())
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
              <input className="form-control" onChange={(e)=>setTitle(e.target.value)} />
            </div>

            <div className="input_row">
              <label htmlFor="">Price</label>
              <input className="form-control" onChange={(e)=>setPrice(e.target.value)} />
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
                  {subcategoryList.map((elem: any) => (
                    <option value={elem.sub_title}>{elem.sub_title}</option>
                  ))}
                </select>


              </div>
           
              <div className="input_row col-lg-4">
                <label htmlFor="">subitem</label>
                <select className="custom-select">
                  {"items" in subItemList
                    ? subItemList.items.map((elem: any) => (
                        <option>{elem.item_title}</option>
                      ))
                    : null}{" "}
                </select>
              </div>

            </div>
          </div>
      
      
          <div className="col-lg-6 col-md-6 col-12 upload_container">
          
            <div className="upload_sec">
              <label>
                <i className="fas fa-cloud-upload-alt upload-icon"></i>
                <input type="file" />
              </label>
            </div>
          
          </div>
         
          <button className="btn add_btn btn-warning btn-block">
            Add Product
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default AddProduct;
