// ...369, 374
import React, { useContext } from "react";
import { useDispatch } from "react-redux";

import Card from "../UI/Card";
import "./ProductItem.css";

import { ProductsContext } from "../../context/ProductsContext";

const ProductItem = (props) => {
  // const dispatch = useDispatch();
  // 369
  // const toggleFav = useContext(ProductsContext).toggleFavorite;

  // const context = useContext(ProductsContext);
  const toggleFavHandler = () => {
    // toggleFav(props.id);
    // dispatch(toggleFav(props.id));
    // TODO
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : ""}
          onClick={toggleFavHandler}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
