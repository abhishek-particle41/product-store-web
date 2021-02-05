import React from 'react';
import './styles.scss'
import ProductList from "../../components/ProductList/ProductList"
import FilterComponent from '../../components/FilterComponent/FilterComponent';
import ToastMessage from '../../components/ToastMessage/ToastMessage';

class HomeScreen extends React.Component {
  render() {
    return (
      <div className="home-screen" >
        <div className="filter-block">
          <FilterComponent />
        </div>
        {/* <ToastMessage /> */}
        <div className="shelf-container">
          <ProductList />
        </div>
      </div>
    );
  }
}

export default HomeScreen;
