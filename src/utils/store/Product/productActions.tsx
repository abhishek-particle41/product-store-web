import { Product } from '../../../components/Product/IProduct'
export const ADD_TO_CART = "ADD_TO_CART"
export const actionTypes = {
  ADD_TO_CART: "ADD_TO_CART"
}

export function addToCart(product: Product) {
  return {
    type: ADD_TO_CART,
    payload: {
      product
    }
  }
}