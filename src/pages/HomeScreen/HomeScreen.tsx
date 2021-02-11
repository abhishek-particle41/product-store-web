import React from 'react';
import './styles.scss'
import ProductList from "../../components/ProductList/ProductList"
import FilterComponent from '../../components/FilterComponent/FilterComponent';
import ResultNumber from '../../components/Home/ResultNumber/ResultNumber';

class HomeScreen extends React.Component {
  render() {
    return (
      <div className="containers">
        <div className="row">
          <div className="col-lg-3">
            <FilterComponent />
          </div>
          <div className="col-lg-9">
            <ResultNumber />
            <ProductList />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
