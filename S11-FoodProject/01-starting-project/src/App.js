import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import { Header } from "./components/Layout/Header";

import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsShown, setcartIsShown] = useState(false);

  const toggleShowCart = () => {
    setcartIsShown((prevState) => {
      return !prevState;
    });
  };
  return (
    <Fragment>
      {cartIsShown && <Cart toggleShowCart={toggleShowCart} />}

      <Header toggleShowCart={toggleShowCart}></Header>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
