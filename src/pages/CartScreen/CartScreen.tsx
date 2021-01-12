import React from 'react';
import './styles.scss'
import { Product } from "../../utils/store/types"
import CartProductView from "../../components/CartProduct/CartProduct";
import store from '../../utils/store/store'

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
                    {items.map((value: Product, index: number) => {
                        return (
                            <CartProductView product={value} key={index} />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default CartScreen;