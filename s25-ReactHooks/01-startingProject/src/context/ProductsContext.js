// 368, 369
import React, { createContext, useState } from "react";

export const ProductsContext = createContext({
  products: [],
  toggleFavorite: (id) => {},
});

export default (props) => {
  const [productsList, setproductsList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  // 369
  const toggleFavorite = (prodId) => {
    setproductsList((currentProdList) => {
      const prodIndex = currentProdList.findIndex((prod) => prod.id === prodId);
      const newFavStatus = !currentProdList[prodIndex].isFavorite;
      const updatedProducts = [...currentProdList];
      updatedProducts[prodIndex] = {
        ...currentProdList[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  };
  return (
    <ProductsContext.Provider
      value={{ products: productsList, toggleFavorite: toggleFavorite }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};
