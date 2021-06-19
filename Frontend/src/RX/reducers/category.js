export const categoryList = (state = [], action) => {
  switch (action.type) {
    case "SET_CATEGORY_LIST":
      return [...action.payLoad];
    default:
      return state;
  }
};

export const subcategoryList = (state = [], action) => {
    switch (action.type) {
      case "SET_SUBCATEGORY_LIST":
        return [...action.payLoad];
      default:
        return state;
    }
  };
  export const subItemList = (state = {}, action) => {
    switch (action.type) {
      case "SET_SUBITEM_LIST":
        return {...action.payLoad};
        case "CLEAR_SUBITEM_LIST":
          return {...action.payLoad};
      default:
        return state;
    }
  };


export const selectedCategory = (state = {}, action) => {
  switch (action.type) {
    case "SELECT_CATEGORY":
      return { ...action.payLoad };
    default:
      return state;
  }
};

export const selectedSub = (state ='', action) => {
    switch (action.type) {
      case "SELECT_SUBCATEGORY":
        return action.payLoad ;
      default:
        return state;
    }
  };
  
  

