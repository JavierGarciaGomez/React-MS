// 271
import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ product }) => {
  const params = useParams();
  console.log("params", params, product);
  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.id}</p>
    </section>
  );
};

export default ProductDetail;
