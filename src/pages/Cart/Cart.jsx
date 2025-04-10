import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import './Cart.css'
export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    clearCart();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 4000);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <p>{item.title}</p>
          <p>${item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
      <button className="btn" onClick={handleCheckout}>Checkout</button>
      {showPopup && <div className="popup">Order placed successfully!</div>}
    </div>
  );
}