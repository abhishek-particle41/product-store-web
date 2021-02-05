import React from 'react';
import './styles.scss'
import CartProductView from "../../components/CartProduct/CartProduct";
import store from '../../utils/store/store'
import OrderSummary from '../../components/OrderSummary/OrderSummary';

class CartScreen extends React.Component {
    public state = {
        items: []
    };

    componentDidMount() {
        this.setState({
            items: store.getState().productReducer
        })
    }

    public render(): React.ReactNode {
        var { items } = this.state;
        return (
            <div className="float-cart">
                <div className="cart-shelf">
                    {items.map((value: any, index: number) => {
                        return (
                            <CartProductView product={value} key={index} />
                        );
                    })}
                    <OrderSummary />
                </div>
            </div>
        );
    }
}

export default CartScreen;