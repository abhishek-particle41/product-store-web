import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../utils/store/Product/productActions";
import { RootStore } from "../../utils/store/store";
import { Product } from '../../utils/store/types'
import './style.scss'

enum button {
    Add = "Add to cart",
    Added = "Added to cart",
}

function AddToCartButton(product: Product) {
    const dispatch = useDispatch();
    const cartArray: any = useSelector((state: RootStore) => state.productReducer)
    const [buttonText, setButtonText] = useState(button.Add)

    useEffect(() => {
        for (var i = 0; i < cartArray.length; i++) {
            if (cartArray[i].id === product.id) {
                setButtonText(button.Added)
                break;
            }
        }
    }, [])

    const onAddToCart = () => {
        if (buttonText === button.Add) {
            dispatch(addToCart(product));
            setButtonText(button.Added)
        }
    };

    return (
        <button className="cart" onClick={() => { onAddToCart() }}>
            {buttonText}
        </button>
    );
}

export default AddToCartButton;
