import { Dispatch } from "@reduxjs/toolkit";
import { CartState } from "../interfaces/interfaces";
import { cartActions } from "./cartSlice";

import { UIActions } from "./uiSlice";

const url =
  "https://tests-project-8925d-default-rtdb.europe-west1.firebasedatabase.app/cart.json";

export const fetchCartData = () => {
  return async (dispatch: Dispatch) => {
    const fetchData = async () => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart({ ...cartData }));
    } catch (error) {
      dispatch(
        UIActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart: CartState) => {
  return async (dispatch: Dispatch) => {
    dispatch(
      UIActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        UIActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        UIActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
