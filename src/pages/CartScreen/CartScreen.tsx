import React from 'react';
import './styles.scss'
import { product } from "../../components/CartProduct/ICartProduct"
import CartProductView from "../../components/CartProduct/CartProduct";

class CartScreen extends React.Component {
    public state = {
        items: []
    };

    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                })
            })
    }

    public render(): React.ReactNode {
        var { items } = this.state;

        return (
            <div className="float-cart">
                <div className="cart-shelf">
                    {items.map((value: product, index: number) => {
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