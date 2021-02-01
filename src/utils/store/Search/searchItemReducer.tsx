import {
  UPDATE_SEARCH,
} from "./searchItemActions";

const initialState: string = "";

export default function productReducer(
  state = initialState,
  action: any
) {
  switch (action.type) {
    case UPDATE_SEARCH:
      return action.payload.searchItem

    default:
      return state;
  }
}
