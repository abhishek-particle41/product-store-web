import {
  actionTypes
} from "./productActions";

const initialState: any = [];

export default function productReducer(
  state = initialState,
  action: any
) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return [
        ...state, action.payload
      ]
    case actionTypes.REMOVE_PRODUCT_FROM_CART:
      return state.filter((item: any) => item.product.id !== action.payload)
    case actionTypes.UPDATE_CART_QUANTITY:
      const updatedCart = [...state];
      updatedCart.map((item: any) => {
        if (item.product.id === action.payload.product.id) {
          item.quantity = action.payload.quantity;
        }
      })
      return updatedCart
    default:
      return state;
  }
}
