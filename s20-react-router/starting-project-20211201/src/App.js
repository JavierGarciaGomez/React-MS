// 268

import { Route, Router, Switch, Redirect } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      {/* 268 */}

      <MainHeader />
      <main>
        {/* 273 */}

        <Switch>
          {/* 275 */}
          <Route exact path="/">
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>

          <Route exact path="/products/:id">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
