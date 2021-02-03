export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES"
export const UPDATE_PRICE_RANGE = "UPDATE_PRICE_RANGE"
export const actionTypes = {
  UPDATE_CATEGORIES: "UPDATE_CATEGORIES",
  UPDATE_PRICE_RANGE: "UPDATE_PRICE_RANGE"
}

export function updateCategories(category: string[]) {
  return {
    type: UPDATE_CATEGORIES,
    payload: {
      category
    }
  }
}

export function updatePriceRange(priceRange: number[]) {
  return {
    type: UPDATE_PRICE_RANGE,
    payload: {
      priceRange
    }
  }
}