import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../utils/store/store";
import { GetItem } from "../../utils/store/Item/itemActions";
import ProductView from '../Product/Product';
import { Product } from '../../utils/store/types';
import { Spinner } from 'react-bootstrap';

function DisplayData(props: { isLoading: boolean; items?: any; searchItem: string }) {
    const { isLoading, items, searchItem } = props
    if (isLoading) {
        return <Spinner animation="border" />;
    } else return <div className="shelf-container">
        {items && items.map((value: Product, index: number) => {
            if (value.title.includes(searchItem)) {
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
    useEffect(() => {
        if (itemState.item == undefined) { dispatch(GetItem()) }
    }, [])
    return (
        <div className="ProductList">
            <DisplayData
                isLoading={itemState.loading}
                items={itemState.item}
                searchItem={searchItemState}
            />
        </div>
    );
}

export default ProductList;
