import React, { useContext } from "react";
import CartItems from "./CartItems";
import { ShopProvider } from "../Context/ShoppingContext";

const Cart = () => {
  const { state } = useContext(ShopProvider);
  const { cartItems } = state;

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <div className="block col-1 cart empty">
        <h3>Cart is Empty</h3>
      </div>
    );
  } else
    return (
      <div className="block col-1 cart">
        <h3>Cart Items</h3>

        <div>
          {cartItems.map(item => (
            <CartItems key={item.id} item={item} />
          ))}
        </div>
        <hr />

        <div className="row center cart">
          <span>Total Price:</span>

          <span>${totalPrice}</span>
        </div>
      </div>
    );
};

export default Cart;
