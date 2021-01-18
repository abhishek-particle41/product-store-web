import {
  ITEM_FAIL,
  ITEM_LOADING,
  ITEM_SUCCESS,
  ItemDispatchTypes,
  ItemType
} from "./itemActionTypes";

interface DefaultStateI {
  loading: boolean,
  item?: ItemType
}

const defaultState: DefaultStateI = {
  loading: false
};

const itemReducer = (state: DefaultStateI = defaultState, action: ItemDispatchTypes): DefaultStateI => {
  switch (action.type) {
    case ITEM_FAIL:
      return {
        loading: false,
      }
    case ITEM_LOADING:
      return {
        loading: true,
      }
    case ITEM_SUCCESS:
      return {
        loading: false,
        item: action.payload
      }
    default:
      return state
  }
};


export default itemReducer