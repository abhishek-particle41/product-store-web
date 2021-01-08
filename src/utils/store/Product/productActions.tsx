export const ADD_TO_CART = "ADD_TO_CART"
export const actionTypes = {
  ADD_TO_CART: "ADD_TO_CART"
}

export function addToCart(id: number) {
  return {
    type: ADD_TO_CART,
    payload: {
      id
    }
  }
}