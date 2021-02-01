import store from "../../utils/store/store";
import './style.scss'

function Summary(cartProducts: number, totalPrice: number) {
    if (cartProducts == 0) {
        return <div className="row">
            <h2 className="title">Your Cart Is Empty</h2>
        </div>
    } else return <div className="row">
        <h2 className="title">Total Amount:</h2>
        <span className="price">${totalPrice.toFixed(2)}</span>
    </div>;
}

const OrderSummary = () => {
    let cartProducts: any = store.getState().productReducer
    let totalPrice: number = 0
    cartProducts.map((value: any) => {
        totalPrice = totalPrice + value.product.price
    })

    return (
        <div className="summary-screen" >
            <div className="summary">
                <div className="box">
                    {Summary(cartProducts.length, totalPrice)}
                </div>
            </div>
        </div>
    );
}

export default OrderSummary;
