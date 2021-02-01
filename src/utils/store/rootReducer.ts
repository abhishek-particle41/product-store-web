import { combineReducers } from "redux";
import productReducer from "./Product/productReducer";
import itemReducer from "./Item/itemReducer"
import searchItemReducer from "./Search/searchItemReducer"

const rootReducer = combineReducers({
  productReducer,
  itemReducer,
  searchItemReducer
});

export default rootReducer
