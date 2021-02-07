import React from "react";
import "./style.scss";
import { Product } from '../../utils/store/types'
import QuantityCounter from '../../components/QuantityCounter/QuantityCounter'
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from "react-redux";
import { removeProductToCart, updateCartQuantity } from "../../utils/store/Product/productActions";

const CartProductView = (props: any) => {
  let product: Product = props.product
  const dispatch = useDispatch();

  return (
    <div
      className="cart-item"
    >
      <div className="thumb">
        <img src={product.image}
          alt={product.title} title={product.title} />
      </div>
      <div className="details">
        <p className="title">{product.title}</p>
        <p className="desc">{product.description}</p>
      </div>
      <div className="counter">
        <QuantityCounter product={props.product} quantity={props.quantity} />
      </div>
      <div className="price">
        <div className="val">
          <b> $ {product.price * props.quantity}</b>
        </div>
      </div>
      <div className="remove">
        <DeleteIcon fontSize="large" onClick={() => dispatch(removeProductToCart(product.id))} />
      </div>
    </div>
  );
}

export default CartProductView;
