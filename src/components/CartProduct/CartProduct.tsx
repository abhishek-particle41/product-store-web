import React from "react";
import "./style.scss";
import { Product } from '../../utils/store/types'
import QuantityCounter from '../../components/QuantityCounter/QuantityCounter'
import { DeleteOutlined } from '@material-ui/icons';

function CartProductView(value: any, key: number) {
  let product: Product = value.product

  let handleClick = (value: any) => {
    // handle changes from child
    console.log(value)
  }

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
        <QuantityCounter />
      </div>
      <div className="price">
        <div className="val">
          <b> $ {product.price}</b>
        </div>
      </div>
      <DeleteOutlined className="remove-icon" />
    </div>
  );
}

export default CartProductView;
