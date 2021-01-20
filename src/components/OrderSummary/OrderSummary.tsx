import store from "../../utils/store/store";
import './style.scss'

function OrderSummary() {
    let cartProducts: any = store.getState().productReducer
    let totalPrice: number = 0
    cartProducts.map((value: any) => {
        totalPrice = totalPrice + value.product.price
    })

    return (
        <div className="summary-screen" >
            <div className="summary">
                <div className="box">
                    <div className="row">
                        <h2 className="title">Total Amount:</h2>
                        <span className="price">${totalPrice.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderSummary;
