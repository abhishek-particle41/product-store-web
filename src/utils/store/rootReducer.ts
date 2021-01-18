import { combineReducers } from "redux";
import productReducer from "./Product/productReducer";
import itemReducer from "./Item/itemReducer"

const rootReducer = combineReducers({
  productReducer,
  itemReducer
});

export default rootReducer
