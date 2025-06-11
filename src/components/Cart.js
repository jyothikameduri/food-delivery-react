import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import EmptyCart from "./EmptyCart";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch()
  // Calculate total price
  const totalPrice = cartItems.reduce((sum, item) => {
  const price = item.price || item.defaultPrice || 0;
  const quantity = item.quantity || 1; 
  return sum + price * quantity;
  }, 0);

  return (
    <div className="text-center m-4 p-4">
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="px-4">
          <button className="mt-4 px-6 py-2 text-white bg-red-500 hover:bg-red-600 font-semibold rounded-lg shadow-md transition-all duration-200" onClick={()=>dispatch(clearCart())}>Clear Cart</button>
          <div className="px-4 py-10"><ItemList items={cartItems} /></div>
          
          <div className="mt-6 text-right px-6">
            <h2 className="text-lg font-semibold">
              Total: ₹{(totalPrice / 100).toFixed(2)}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
