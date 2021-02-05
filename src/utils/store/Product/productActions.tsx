import { Product } from '../types'
export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART"
export const actionTypes = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_PRODUCT_FROM_CART: "REMOVE_PRODUCT_FROM_CART"
}

export function addToCart(product: Product) {
  return {
    type: ADD_TO_CART,
    payload: product
  }
}

export const removeProductToCart = (productId: Number) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: productId
  }
};