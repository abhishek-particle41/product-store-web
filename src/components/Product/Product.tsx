import React from "react";
import "./style.scss";
import { product } from './IProduct'

interface Props {
  product: product;
  key: number;
}

const ProductView: React.FunctionComponent<Props> = ({ product }) => {
  return (
    <div
      className="shelf-item"
    >
      <div className="shelf-item__thumb">
        <img src={product.image}
          alt={product.title} title={product.title} />
      </div>
      <p className="shelf-item__title">{product.title}</p>
      <div className="shelf-item__price">
        <div className="val">
          <b> $ {product.price}</b>
        </div>
      </div>
      <div className="shelf-item__buy-btn">Add to cart</div>
    </div>
  );
};

export default ProductView;
