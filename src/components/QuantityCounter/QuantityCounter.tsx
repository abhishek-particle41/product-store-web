import React from "react";
import { useDispatch } from "react-redux";
import { updateCartQuantity } from "../../utils/store/Product/productActions";
import './styles.scss'

const QuantityCounter = (props: any) => {
    const [count, setCount] = React.useState(props.quantity)
    const dispatch = useDispatch();
    let handleClick = (value: number) => {
        dispatch(updateCartQuantity(props.product, value));
        setCount(value)
    }
    return (
        <div className="quantity-input">
            <button className="quantity-input__modifier quantity-input__modifier--left" onClick={() => count > 1 ? handleClick(count - 1) : handleClick(count)}>-</button>
            <input className="quantity-input__screen" type="text" value={count} readOnly />
            <button className="quantity-input__modifier quantity-input__modifier--right" onClick={() => handleClick(count + 1)}>+</button>
        </div>
    )
}

export default QuantityCounter;