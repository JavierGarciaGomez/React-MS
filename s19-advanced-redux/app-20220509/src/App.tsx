import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/store";
import { useEffect } from "react";

import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/actionCreators";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const { cartIsVisible, notification } = useSelector(
    (state: RootState) => state.UI
  );
  const cart = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  console.log(cart, notification);

  return (
    <>
      {notification && <Notification {...notification} />}
      <Layout>
        <>{cartIsVisible && <Cart />}</>
        <Products />
      </Layout>
    </>
  );
}

export default App;
