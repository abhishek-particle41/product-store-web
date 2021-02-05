import {
  ADD_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
} from "./productActions";

const initialState: any = [];

export default function productReducer(
  state = initialState,
  action: any
) {
  switch (action.type) {
    case ADD_TO_CART:
      return [
        ...state, action.payload
      ]
    case REMOVE_PRODUCT_FROM_CART:
      return state.filter((item: any) => item.id !== action.payload)
    default:
      return state;
  }
}
