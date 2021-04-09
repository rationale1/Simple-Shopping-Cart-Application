import React, { useContext } from "react";
import { ShopProvider } from "../Context/ShoppingContext";

const ProductsItems = ({ img, name, price, id }) => {
  const { addToCart } = useContext(ShopProvider);

  return (
    <div>
      <img src={img} alt="empty" />

      <h4>{name}</h4>

      <p>${price}</p>

      <button className="add" onClick={() => addToCart(id)}>
        Add to cart
      </button>
    </div>
  );
};

export default ProductsItems;
