import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../utils/store/Product/productActions";

function AddToCartButton() {
    const dispatch = useDispatch();

    const onAddToCart = (id: string) => {
        dispatch(addToCart(id));
    };

    return (
        <button onClick={() => { onAddToCart("1") }}>
            Toggle is Yay
        </button>
    );
}

export default AddToCartButton;
