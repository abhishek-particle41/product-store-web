import React, { Component } from 'react';
import './styles.scss'
import { Product } from "../../utils/store/types"
import AddToCartButton from '../../components/AddToCartButton/AddToCartButton';
import store from '../../utils/store/store'

interface IProps {
    history: History;
    match: any;
    product: Product;
}

class DetailsScreen extends React.Component<IProps, {}>{
    public state = {
        items: []
    };

    componentDidMount() {
        this.setState({
            items: store.getState().itemReducer.item,
        })
    }

    render() {
        var { items } = this.state;
        const productId: number = this.props.match.params.id
        return (
            <div className="details-screen" >
                {items.slice((productId - 1), productId).map((value: Product) => {
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
                                <AddToCartButton {...value} />
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default DetailsScreen;
