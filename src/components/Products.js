import React, { useContext } from "react";
import { ShopProvider } from "../Context/ShoppingContext";
import ProductsItems from "./ProductsItems";

const Products = () => {
  const { state } = useContext(ShopProvider);
  const { products } = state;

  return (
    <div className="block col-2">
      <h3>Products</h3>

      <div className="row center">
        {products.map(prod => (
          <ProductsItems key={prod.id} {...prod} />
        ))}
      </div>
    </div>
  );
};

export default Products;
