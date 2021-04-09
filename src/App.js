import React from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Products from "./components/Products";
import "./StyleSheet/simple.css";
import ShoppingContext from "./Context/ShoppingContext";

const App = () => {
  return (
    <div className="container">
      <ShoppingContext>
        <Header />

        <div className="row">
          <Products />

          <Cart />
        </div>
      </ShoppingContext>
    </div>
  );
};

export default App;
