export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES"
export const actionTypes = {
  UPDATE_CATEGORIES: "UPDATE_CATEGORIES"
}

export function updateCategories(category: string) {
  return {
    type: UPDATE_CATEGORIES,
    payload: {
      category
    }
  }
}