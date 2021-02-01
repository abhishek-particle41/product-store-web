export const UPDATE_SEARCH = "UPDATE_SEARCH"
export const actionTypes = {
  UPDATE_SEARCH: "UPDATE_SEARCH"
}

export function updateSearch(searchItem: string) {
  return {
    type: UPDATE_SEARCH,
    payload: {
      searchItem
    }
  }
}