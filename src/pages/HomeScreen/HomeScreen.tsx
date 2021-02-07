import React from 'react';
import './styles.scss'
import ProductList from "../../components/ProductList/ProductList"
import FilterComponent from '../../components/FilterComponent/FilterComponent';
import ToastMessage from '../../components/ToastMessage/ToastMessage';
import ResultNumber from '../../components/Home/ResultNumber/ResultNumber';

class HomeScreen extends React.Component {
  render() {
    return (
      <div className="home-screen" >
        <div className="filter-block">
          <FilterComponent />
        </div>
        <div className="vertical-line"></div>
        {/* <ToastMessage /> */}
        <div className="shelf-container">
          <ResultNumber />
          <ProductList />
        </div>
      </div>
    );
  }
}

export default HomeScreen;
