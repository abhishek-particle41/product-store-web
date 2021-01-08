import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../utils/store/Product/productActions";
import './style.scss'

interface IAddToCart {
    id: number
}

function AddToCartButton(cartItem: IAddToCart) {
    const dispatch = useDispatch();

    const onAddToCart = (id: number) => {
        dispatch(addToCart(id));
    };

    return (
        <button className="cart" onClick={() => { onAddToCart(cartItem.id) }}>
            Add To Cart
        </button>
    );
}

export default AddToCartButton;
