import { Dispatch } from "redux";
import { ITEM_FAIL, ITEM_LOADING, ITEM_SUCCESS, ItemDispatchTypes } from "./itemActionTypes";
import axios from "axios";

export const GetItem = () => async (dispatch: Dispatch<ItemDispatchTypes>) => {
    try {
        dispatch({
            type: ITEM_LOADING
        })

        const res = await axios.get(`https://fakestoreapi.com/products`);

        dispatch({
            type: ITEM_SUCCESS,
            payload: res.data
        })

    } catch (e) {
        dispatch({
            type: ITEM_FAIL
        })
    }
};