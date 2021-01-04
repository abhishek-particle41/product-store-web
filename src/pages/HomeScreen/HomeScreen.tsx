import React from 'react';
import './styles.scss'
import { product } from "../../components/Product/IProduct"
import ProductView from "../../components/Product/Product"
import { getProducts } from "../../utils/services/productServices"

class HomeScreen extends React.Component {
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

  render() {
    const { items } = this.state;
    return (
      <div className="home-screen" >
        <div className="shelf-container">
          {items.map((value: product, index: number) => {
            return (
              <ProductView product={value} key={index} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default HomeScreen;
