import { combineReducers } from "redux";
import { user, firstname, lastname, pass, email } from "./user";
import { categoryList,selectedCategory,selectedSub,subcategoryList,subItemList } from "./category";

export const reducers = combineReducers({
  user,
  firstname,
  lastname,
  pass,
  email,
  categoryList,
  subcategoryList,
  subItemList,
  selectedSub,
  selectedCategory,
});
