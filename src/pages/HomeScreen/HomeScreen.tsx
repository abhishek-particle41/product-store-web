import React from 'react';
import './styles.scss'
import { product } from "../../components/Product/IProduct"
import ProductView from "../../components/Product/Product"
import { getProducts } from "../../utils/services/productServices"

class HomeScreen extends React.Component {
  public state = {
    items: []
  };

  setProducts = async () => {
    this.setState({
      items: await getProducts(),
    })
  }

  componentDidMount() {
    this.setProducts()
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
