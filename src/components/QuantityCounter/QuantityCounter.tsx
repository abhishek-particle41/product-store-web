import React, { PureComponent } from "react";
import './styles.scss'

class QuantityCounter extends PureComponent<{}, { count: number }> {
    state = { count: 0 };
    updateCount = (e: React.MouseEvent<HTMLButtonElement>): void => {
        switch (e.currentTarget.innerText) {
            case "-":
                this.setState({ count: this.state.count - 1 });
                // this.setState(prevState => { count > 0 ? count : this.state.count - 1 });
                break;
            case "+":
            default:
                this.setState({ count: this.state.count + 1 });
                break;
        }
    };
    render(): JSX.Element {
        const { count } = this.state;
        return (
            <div className="quantity-input">
                <button className="quantity-input__modifier quantity-input__modifier--left" onClick={this.updateCount}>
                    -
        </button>
                <input className="quantity-input__screen" type="text" value={count} readOnly />
                <button className="quantity-input__modifier quantity-input__modifier--right" onClick={this.updateCount}>
                    +
        </button>
            </div>
        );
    }
}
export default QuantityCounter;