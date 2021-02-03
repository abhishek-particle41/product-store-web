import { combineReducers } from "redux";
import productReducer from "./Product/productReducer";
import itemReducer from "./Item/itemReducer"
import searchItemReducer from "./Search/searchItemReducer"
import { categoriesReducer, priceReducer } from "./Categories/filtersReducer"

const rootReducer = combineReducers({
  productReducer,
  itemReducer,
  searchItemReducer,
  categoriesReducer,
  priceReducer
});

export default rootReducer
