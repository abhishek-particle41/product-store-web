import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../utils/store/Product/productActions";
import { Product } from '../../utils/store/types'
import './style.scss'

function AddToCartButton(product: Product) {
    const dispatch = useDispatch();

    const onAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <button className="cart" onClick={() => { onAddToCart() }}>
            Add To Cart
        </button>
    );
}

export default AddToCartButton;
