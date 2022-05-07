import "./App.css";
import Counter from "./components/Counter";
import { CounterReduxToolkit } from "./components/CounterReduxToolkit";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";

function App() {
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  return (
    <>
      <Header />
      {!isAuthenticated && <Auth />}

      <h2>Counter redux without toolkit</h2>
      {/* <Counter /> */}
      <h2>Counter redux without toolkit</h2>
      <CounterReduxToolkit />
    </>
  );
}

export default App;
