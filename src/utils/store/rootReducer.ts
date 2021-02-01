import { combineReducers } from "redux";
import productReducer from "./Product/productReducer";
import itemReducer from "./Item/itemReducer"
import searchItemReducer from "./Search/searchItemReducer"
import categoriesReducer from "./Categories/categoriesReducer"

const rootReducer = combineReducers({
  productReducer,
  itemReducer,
  searchItemReducer,
  categoriesReducer
});

export default rootReducer
