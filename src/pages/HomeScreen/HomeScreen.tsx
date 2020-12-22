import React from 'react';
import './styles.scss'
import { product } from "../../components/Product/IProduct"
import ProductView from "../../components/Product/Product";
import { Menu } from '@material-ui/icons';

interface State {
  isLoaded: boolean;
}

interface Item {
  id: number;
  title: String
}

class HomeScreen extends React.Component {
  public state = {
    isLoaded: false,
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
    var { isLoaded, items } = this.state;
    console.log(items);
    return (
      <div className="shelf-container">
        {/* <Menu className="menu-icon" fontSize="large" /> */}
        {items.map((value: product, index: number) => {
          return (
            <ProductView product={value} key={index} />
          );
        })}
      </div>
    );
  }
}

export default HomeScreen;
