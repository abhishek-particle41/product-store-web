import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../utils/store/store";
import { GetItem } from "../../utils/store/Item/itemActions";
import ProductView from '../Product/Product';
import { Product } from '../../utils/store/types';
import { Spinner } from 'react-bootstrap';

function DisplayData(props: { isLoading: boolean; items?: any }) {
    const { isLoading, items } = props
    if (isLoading) {
        return <Spinner animation="border" />;
    } else return <div className="shelf-container">
        {items && items.map((value: Product, index: number) => {
            return (
                <ProductView product={value} key={index} />
            );
        })}
    </div>;
}

function ProductList() {
    const dispatch = useDispatch();
    const itemState = useSelector((state: RootStore) => state.itemReducer);
    const handleSubmit = () => dispatch(GetItem());

    return (
        <div className="ProductList">
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            />
            <button onClick={handleSubmit}>Get Items</button>
            <DisplayData
                isLoading={itemState.loading}
                items={itemState.item}
            />
        </div>
    );
}

export default ProductList;
