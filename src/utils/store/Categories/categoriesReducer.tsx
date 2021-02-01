import {
  UPDATE_CATEGORIES,
} from "./categoriesActions";

const initialState: string = "categories";

export default function categoriesReducer(
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
