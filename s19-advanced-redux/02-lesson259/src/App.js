// 251
import { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cartActions";

// 258
let isInitial = true;

function App() {
  // 258
  const dispatch = useDispatch();
  // 251
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  // 260

  useEffect(() => {
    dispatch(fetchCartData(cart));
  }, [dispatch]);

  useEffect(() => {
    // const sendCartData = async () => {
    // dispatch(
    //   uiActions.showNotification({
    //     status: "pending",
    //     title: "Sending...",
    //     message: "Sending Cart Data",
    //   })
    // );
    // const response = await fetch(
    //   "https://react-course-fh-default-rtdb.europe-west1.firebasedatabase.app/cart",
    //   { method: "PUT", body: JSON.stringify(cart) }
    // );
    // if (!response.ok) {
    //   throw new Error("Sending cart data failed");
    // }
    // };

    if (isInitial) {
      isInitial = false;
      return;
    }

    // sendCartData().catch((error) => {
    //   dispatch(
    //     uiActions.showNotification({
    //       status: "error",
    //       title: "Error",
    //       message: "Sending cart data failed",
    //     })
    //   );
    // });

    // 259
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
