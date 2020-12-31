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

        return (
            <div className={"float-cart"}>
                <div className="float-cart_content">
                    <div className="cart-shelf">
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