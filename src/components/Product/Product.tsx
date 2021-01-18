import React from "react";
import "./style.scss";
import { Product } from '../../utils/store/types'
import { useHistory } from 'react-router-dom'

interface IProps {
  product: Product;
  key: number;
}

const ProductView: React.FunctionComponent<IProps> = ({ product }) => {
  let history = useHistory()
  return (
    <div className="item" onClick={() => {
      history.push({
        pathname: '/details/' + product.id,
      });
    }}>
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
    </div >
  );
};

export default ProductView;
