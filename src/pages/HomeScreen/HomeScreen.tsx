import React from 'react';
import './styles.scss'
import { product } from "../../components/Product/IProduct"
import ProductView from "../../components/Product/Product";

interface Item {
  id: number;
  title: string
}

class HomeScreen extends React.Component {
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
