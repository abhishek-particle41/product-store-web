import React from "react";
import "./style.scss";
import { Product } from '../../utils/store/types'
import { useHistory } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { addToCart } from "../../utils/store/Product/productActions";

interface IProps {
  product: Product;
  key: number;
}

const ProductView: React.FunctionComponent<IProps> = ({ product }) => {
  let history = useHistory()
  const dispatch = useDispatch();

  const handleClick = (e: any) => {
    if (e.target.id === 'addToCart') {
      dispatch(addToCart(product));
    } else {
      history.push({
        pathname: '/details/' + product.id,
      });
    }
  }
  return (
    <div className="item" onClick={handleClick}>
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
      <div className="buy-btn" id="addToCart">Add to cart</div>
    </div >
  );
};

export default ProductView;
