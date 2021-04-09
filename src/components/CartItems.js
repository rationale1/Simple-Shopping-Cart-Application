import React, { useContext, useEffect } from "react";
import { ShopProvider } from "../Context/ShoppingContext";

const CartItems = ({ item }) => {
  const { increment, decrement, removeFromCart } = useContext(ShopProvider);

  useEffect(() => {
    item.qty < 1 && removeFromCart(item.id);
  }, [item, removeFromCart]);

  return (
    <div className="row center">
      <div>
        <h3>{item.name}</h3>
      </div>

      <div>
        <button className="btn" onClick={() => decrement(item.id)}>
          -
        </button>

        <button className="btn plus" onClick={() => increment(item.id)}>
          +
        </button>
      </div>

      <div>
        qty: {item.qty}
        <p>Price ${item.price}</p>
      </div>
    </div>
  );
};

export default CartItems;
