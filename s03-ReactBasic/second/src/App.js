import { Expenses } from "./components/Expenses";
import { expenses } from "./data/expenses";

export const App = () => {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
