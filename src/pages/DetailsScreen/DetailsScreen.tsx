import React from 'react';
import './styles.scss'
import { product } from "../../components/Product/IProduct"
import ProductView from "../../components/Product/Product";
import { Menu } from '@material-ui/icons';
import QuantityCounter from '../../components/QuantityCounter/QuantityCounter';

interface Item {
    id: number;
    title: String
}

class DetailsScreen extends React.Component {
    public state = {
        items: []
    };

    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            })
    }

    render() {
        var { items } = this.state;
        return (
            <div className="details-screen" >
                {items.slice(2, 3).map((value: product) => {
                    return (
                        <div className="details" key={value.id}>
                            <div className="big-img">
                                <img className="big-img_img" src={value.image} />
                            </div>

                            <div className="box">
                                <div className="row">
                                    <h2>{value.title}</h2>
                                    <span>${value.price}</span>
                                </div>
                                <p>{value.description}</p>
                                <button className="cart">Add to cart</button>
                                {/* <div className="counter">
                                    <QuantityCounter />
                                </div> */}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default DetailsScreen;
