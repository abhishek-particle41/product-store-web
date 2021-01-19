import React from "react";
import './styles.scss'

function QuantityCounter(props: any) {
    const [count, setCount] = React.useState(1)
    let handleClick = (value: number) => {
        setCount(value)
        props.changeCount(value)
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