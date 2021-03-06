import React, { PureComponent } from "react";
import './styles.scss'

class QuantityCounter extends PureComponent<{}, { count: number }> {
    state = { count: 0 };

    increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
    }

    decreaseCount = () => {
        this.setState({ count: this.state.count - 1 });
        // this.setState(prevState => { count > 0 ? count : this.state.count - 1 });
    }

    render(): JSX.Element {
        const { count } = this.state;
        return (
            <div className="quantity-input">
                <button className="quantity-input__modifier quantity-input__modifier--left" onClick={this.decreaseCount}>-</button>
                <input className="quantity-input__screen" type="text" value={count} readOnly />
                <button className="quantity-input__modifier quantity-input__modifier--right" onClick={this.increaseCount}>+</button>
            </div>
        );
    }
}
export default QuantityCounter;