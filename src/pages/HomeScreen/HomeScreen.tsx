import React from 'react';
import './styles.scss'
import { getProducts } from "../../utils/services/productServices"
import ProductList from "../../components/ProductList/ProductList"

class HomeScreen extends React.Component {
  public state = {
    items: []
  };

  // Need to change here
  addProducts = async () => {
    this.setState({
      items: await getProducts(),
    })
  }

  componentDidMount() {
    this.addProducts()
  }

  render() {
    const { items } = this.state;
    return (
      <div className="home-screen" >
        <ProductList />
      </div>
    );
  }
}

export default HomeScreen;
