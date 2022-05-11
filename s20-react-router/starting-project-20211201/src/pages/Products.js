// 268
import React from "react";
import { Link } from "react-router-dom";

const dummyProducts = [
  { id: "a", name: "a book" },
  { id: "b", name: "a brain" },
  { id: "c", name: "a car" },
];
const Products = () => {
  return (
    <section>
      <h1>Products page</h1>
      <ul>
        {dummyProducts.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`/products/${product.id}`} product={product}>
                {product.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
