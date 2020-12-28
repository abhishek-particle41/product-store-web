import React from 'react';
import './styles.scss'
import { product } from "../../components/CartProduct/ICartProduct"
import CartProductView from "../../components/CartProduct/CartProduct";
import { Menu } from '@material-ui/icons';

interface State {
    isLoaded: boolean,
    isOpen: boolean;
}

interface Item {
    id: number,
    title: String;
    description: String;
}

class CartScreen extends React.Component {
    public state = {
        isOpen: true,
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
        var { isOpen, items } = this.state;

        const cartProducts: any = [];
        for (const k in this.state.items) {
            cartProducts.push(this.state.items[k]);
        }
        // const itemQuantity = cartProducts.reduce((sum: number, product: cartProducts) => {
        //     return sum + product.itemQuantity;
        // }, 0);
        return (
            <div className={"float-cart"}>
                {/* <div className="cart-close-button" onClick={this.toggleCartDrawer}>X</div> */}
                <div className="float-cart_content">
                    <div className="float-cart_header">
                        <div className={"trolley"} onClick={this.toggleCartDrawer}>
                            <span className={"item-quantity-icon"}>2</span>
                        </div>
                        <span className="header-title">Cart</span>
                    </div>
                    <div className="cart-shelf">
                        {/* {cartProducts.map((value, index) => <CartProductContainer product={value} key={index} />)} */}
                        {items.map((value: product, index: number) => {
                            return (
                                <CartProductView product={value} key={index} />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

    private toggleCartDrawer = () => {
        // this.setState((prevState: State) => ({ isOpen: !prevState.isOpen }));
    }
}

export default CartScreen;