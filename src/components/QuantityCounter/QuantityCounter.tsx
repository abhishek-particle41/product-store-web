import React from "react";
import './styles.scss'

function QuantityCounter() {
    const [count, setCount] = React.useState(1)
    return (
        <div className="quantity-input">
            <button className="quantity-input__modifier quantity-input__modifier--left" onClick={() => count > 1 ? setCount(count - 1) : setCount(count)}>-</button>
            <input className="quantity-input__screen" type="text" value={count} readOnly />
            <button className="quantity-input__modifier quantity-input__modifier--right" onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default QuantityCounter;