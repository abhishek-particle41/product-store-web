import { Product } from '../types'
export const actionTypes = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_PRODUCT_FROM_CART: "REMOVE_PRODUCT_FROM_CART",
  UPDATE_CART_QUANTITY: "UPDATE_CART_QUANTITY"
}

export function addToCart(product: Product) {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      product,
      quantity: 1
    }
  }
}

export function updateCartQuantity(product: Product, quantity: Number) {
  return {
    type: actionTypes.UPDATE_CART_QUANTITY,
    payload: {
      product,
      quantity
    }
  }
}

export const removeProductToCart = (productId: Number) => {
  return {
    type: actionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: productId
  }
};