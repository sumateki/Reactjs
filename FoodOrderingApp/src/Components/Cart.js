import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice"

const Cart = () =>{

    //subscribing to store 
    const cartItems = useSelector((store) => store.cart.items)

    //use dispatch function
    const dispatch = useDispatch()
    const handleClearCart = () =>{
        dispatch(clearCart())
    }

    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-xl font-bold">
                Cart
            </h1>
            <div className="w-5/12 m-auto p-5 ">
                <button 
                    className="font-bold p-2 m-2 bg-black text-white rounded-lg"
                    onClick={handleClearCart}>
                    Clear Cart
                </button>
                {cartItems.length === 0 && <h1>Your Cart is Empty, Please add items!!</h1>}
                <ItemList items= {cartItems}/>
            </div>
        </div>
    )
}

export default Cart