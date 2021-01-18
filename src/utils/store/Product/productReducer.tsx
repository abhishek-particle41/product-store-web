import {
  ADD_TO_CART,
} from "./productActions";

const initialState: never[] = [];

export default function productReducer(
  state = initialState,
  action: any
) {
  switch (action.type) {
    case ADD_TO_CART:
      return [
        ...state,
        {
          product: action.payload.product
        }
      ]

    default:
      return state;
  }
}
