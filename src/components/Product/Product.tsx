import React, { useEffect, useState } from "react";
import "./style.scss";
import { Product } from '../../utils/store/types'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../utils/store/Product/productActions";
import { RootStore } from "../../utils/store/store";

interface IProps {
  product: Product;
  key: Number
}

enum button {
  Add = "Add to cart",
  Added = "Added to cart",
}

const ProductView: React.FunctionComponent<IProps> = ({ product }) => {
  let history = useHistory()
  const dispatch = useDispatch();
  const cartArray: any = useSelector((state: RootStore) => state.productReducer)
  const [buttonText, setButtonText] = useState(button.Add)

  useEffect(() => {
    for (var i = 0; i < cartArray.length; i++) {
      if (cartArray[i].product.title === product.title) {
        setButtonText(button.Added)
        break;
      }
    }
  }, [])

  const handleClick = (e: any) => {
    if (e.target.id === 'addToCart') {
      if (buttonText === button.Add) {
        dispatch(addToCart(product));
        setButtonText(button.Added)
      }
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
      <div className="buy-btn" id="addToCart">{buttonText}</div>
    </div >
  );
};

export default ProductView;
