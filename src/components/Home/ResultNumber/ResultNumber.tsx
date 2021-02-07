import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../../utils/store/store";
import './styles.scss'


const ResultNumber = () => {
    let totalItems: Number = 0;
    let Products: any = [];
    Products = useSelector((state: RootStore) => state.itemReducer)
    if (Products.item !== undefined) {
        totalItems = Products.item.length
    }
    return (
        <div className="number-screen" >
            <h2 className="number-screen_label">{totalItems} results found</h2>
        </div>
    );
}

export default ResultNumber;
