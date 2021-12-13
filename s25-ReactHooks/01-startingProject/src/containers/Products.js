// ..., 374
import React, { createContext, useContext } from "react";
import { useSelector } from "react-redux";
import { useStore } from "../components/hooks-store/newStore";

import ProductItem from "../components/Products/ProductItem";
import { ProductsContext } from "../context/ProductsContext";
import "./Products.css";

const Products = (props) => {
  // const productList = useContext(ProductsContext).products;

  // const productList = useSelector((state) => state.shop.products);
  // 374
  const [state, dispatch] = useStore();
  console.log("state", state);

  return (
    <ul className="products-list">
      {/* 374 */}
      {state.products.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
