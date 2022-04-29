import { useState } from "react";
import Cart from "./components/Cart/Cart";
import { Header } from "./components/Layout/Header";

import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setcartIsShown] = useState(false);

  const toggleShowCart = () => {
    setcartIsShown((prevState) => {
      return !prevState;
    });
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart toggleShowCart={toggleShowCart} />}

      <Header toggleShowCart={toggleShowCart}></Header>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
