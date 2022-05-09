import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./components/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
function App() {
  return (
    <BrowserRouter>
      <header>
        <MainHeader />
      </header>
      <main>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
