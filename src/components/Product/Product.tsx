import React from "react";
import "./style.scss";
import { product } from './IProduct'
import { NavLink } from 'react-router-dom'

interface Props {
  product: product;
  key: number;
}

const ProductView: React.FunctionComponent<Props> = ({ product }) => {
  return (
    <NavLink className="item" to="/details" >
      <div
      // className="item"
      >
        <div className="thumb">
          <img src={product.image}
            alt={product.title} title={product.title} />
        </div>
        <p className="title">{product.title}</p>
        <div className="price">
          <div className="val">
            <b> $ {product.price}</b>
          </div>
        </div>
        <div className="buy-btn">Add to cart</div>
      </div>
    </NavLink>
  );
};

export default ProductView;
