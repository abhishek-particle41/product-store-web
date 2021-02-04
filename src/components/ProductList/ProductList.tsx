import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../utils/store/store";
import { GetItem } from "../../utils/store/Item/itemActions";
import ProductView from '../Product/Product';
import { Product } from '../../utils/store/types';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function DisplayData(props: { isLoading: boolean; items?: any; searchItem: string; category: string }) {
    const { isLoading, items, searchItem, category } = props
    const priceRange: any = useSelector((state: RootStore) => state.priceReducer);
    if (isLoading) {
        return <div className="item-loader">
            <Loader
                type="ThreeDots"
                color="#6d76f7"
                height={100}
                width={100}
            />
        </div>
    } else return <div className="shelf-container">
        {items && items.map((value: Product, index: number) => {
            if (value.title.includes(searchItem) && (category.length === 0 || category.includes(value.category)) && value.price >= priceRange[0] && value.price <= priceRange[1]) {
                return (
                    <ProductView product={value} key={index} />
                );
            }
        })}
    </div>;
}

function ProductList() {
    const dispatch = useDispatch();
    const itemState = useSelector((state: RootStore) => state.itemReducer);
    const searchItemState = useSelector((state: RootStore) => state.searchItemReducer);
    const category: any = useSelector((state: RootStore) => state.categoriesReducer);
    useEffect(() => {
        if (itemState.item === undefined) { dispatch(GetItem()) }
    }, [])
    return (
        <div className="ProductList">
            <DisplayData
                isLoading={itemState.loading}
                items={itemState.item}
                searchItem={searchItemState}
                category={category}
            />
        </div>
    );
}

export default ProductList;
