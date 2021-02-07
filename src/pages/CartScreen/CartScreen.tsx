import React from 'react';
import './styles.scss'
import CartProductView from "../../components/CartProduct/CartProduct";
import { RootStore } from '../../utils/store/store'
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import { useSelector } from 'react-redux';

function CartScreen() {
    const items: [] = useSelector((state: RootStore) => state.productReducer);
    return (
        <div className="float-cart">
            <div className="cart-shelf">
                {items.map((value: any, index: number) => {
                    return (
                        <CartProductView product={value.product} quantity={value.quantity} key={index} />
                    );
                })}
                <OrderSummary />
            </div>
        </div>
    );
}

export default CartScreen;