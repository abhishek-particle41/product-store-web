import React, { Component } from 'react';
import './styles.scss'
import { product } from "../../components/Product/IProduct"
import QuantityCounter from '../../components/QuantityCounter/QuantityCounter';
import AddToCartButton from '../../components/AddToCartButton/AddToCartButton';
import { RouteComponentProps, useLocation } from "react-router-dom";

interface Prop extends RouteComponentProps {
    id: any
}

interface State {
    items: []
}

class DetailsScreen extends React.Component<Prop, {}>{
    public state = {
        items: []
    };


    componentDidMount() {
        // const { id } = this.props.location.state
        // console.log(id)
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                this.setState({
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
                                <AddToCartButton id={value.id} />
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default DetailsScreen;
