import {
  UPDATE_CATEGORIES, UPDATE_PRICE_RANGE,
} from "./filtersActions";

const initialState: string[] = [];
const initialPriceRange: number[] = [0, 1000];

export function categoriesReducer(
  state = initialState,
  action: any
) {
  switch (action.type) {
    case UPDATE_CATEGORIES:
      return action.payload.category

    default:
      return state;
  }
}

export function priceReducer(
  state = initialPriceRange,
  action: any
) {
  switch (action.type) {
    case UPDATE_PRICE_RANGE:
      return action.payload.priceRange

    default:
      return state;
  }
}
