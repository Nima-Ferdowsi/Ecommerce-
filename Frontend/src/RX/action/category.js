const category = require("../../json/category.json");
export const getCategoryList = () => {
  return async (dispatch) => {
    await dispatch({ type: "SET_CATEGORY_LIST", payLoad: category });
  };
};

export const getSubcategoryList = () => {
  return async (dispatch, getState) => {
    const selectedCategory = getState().selectedCategory;
    const filteredSub = category.filter(
      (elem) => elem.category.id === selectedCategory.id
    );

    if (typeof filteredSub[0] !== "undefined") {
      console.log(filteredSub[0].subCategory);
      await dispatch({
        type: "SET_SUBCATEGORY_LIST",
        payLoad: filteredSub[0].subCategory,
      });
    }
  };
};
export const getSubitemList = () => {
  return async (dispatch, getState) => {
    const subList = getState().subcategoryList;
    const selectedItem = getState().selectedSub;
    const filteredItem = subList.filter(
      (elem) => elem.sub_title == selectedItem
    );
    await dispatch({ type: "SET_SUBITEM_LIST", payLoad: filteredItem[0] });

    console.log(filteredItem[0]);
  };
};
export const clearSubItem = () => {
    return async (dispatch, getState) => {
     
      await dispatch({ type: "CLEAR_SUBITEM_LIST", payLoad:{}});
  
    };
  };
export const getCategory = (id, name) => {
  return async (dispatch) => {
    const data = { id, name };
    await dispatch({ type: "SELECT_CATEGORY", payLoad: data });
  };
};
export const selectSub = (name) => {
  return async (dispatch) => {
    await dispatch({ type: "SELECT_SUBCATEGORY", payLoad: name });
  };
};
