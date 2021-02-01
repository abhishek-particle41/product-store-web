import React from 'react';
import './styles.scss'
import ProductList from "../../components/ProductList/ProductList"

class HomeScreen extends React.Component {
  render() {
    return (
      <div className="home-screen" >
        <ProductList />
      </div>
    );
  }
}

export default HomeScreen;
