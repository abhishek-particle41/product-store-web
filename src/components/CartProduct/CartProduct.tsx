import React from "react";
import "./style.scss";
import { Product } from '../../utils/store/types'
import QuantityCounter from '../../components/QuantityCounter/QuantityCounter'
import { DeleteOutlined } from '@material-ui/icons';

const CartProductView = (value: any) => {
  let product: Product = value.product
  const [totalPrice, setTotalPrice] = React.useState(product.price)

  const changeCount = (value: number) => {
    setTotalPrice(parseFloat((value * product.price).toFixed(2)))
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
        <QuantityCounter changeCount={changeCount} />
      </div>
      <div className="price">
        <div className="val">
          <b> $ {totalPrice}</b>
        </div>
      </div>
      <DeleteOutlined className="remove-icon" />
    </div>
  );
}

export default CartProductView;
