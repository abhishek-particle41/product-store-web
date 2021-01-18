import { Product } from '../types'

export const ITEM_LOADING = "ITEM_LOADING";
export const ITEM_FAIL = "ITEM_FAIL";
export const ITEM_SUCCESS = "ITEM_SUCCESS";

export type ItemType = {
    item: Product
}

export interface ItemLoading {
    type: typeof ITEM_LOADING
}

export interface ItemFail {
    type: typeof ITEM_FAIL
}

export interface ItemSuccess {
    type: typeof ITEM_SUCCESS,
    payload: ItemType
}

export type ItemDispatchTypes = ItemLoading | ItemFail | ItemSuccess