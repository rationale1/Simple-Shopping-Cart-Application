import React, { useContext } from "react";
import { ShopProvider } from "../Context/ShoppingContext";

const Header = () => {
  const { state } = useContext(ShopProvider);

  return (
    <header className="row block center">
      <h2>Small Shopping Cart </h2>

      <div>
        <a href="/">Cart</a>
        <button type="button" className="btn">
          {state.cartItems.length}
        </button>
      </div>
    </header>
  );
};

export default Header;
