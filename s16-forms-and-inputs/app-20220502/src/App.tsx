import BasicForm from "./components/BasicForm";
import { BasicFormReducer } from "./components/BasicFormReducer";
import SimpleInput from "./components/SimpleInput";
import { SimpleInputCustomHook } from "./components/SimpleInputCustomHook";
import { SimpleInputMultiple } from "./components/SimpleInputMultiple";
import { SimpleInputOverall } from "./components/SimpleInputOverall";
import { SimpleInputTouched } from "./components/SimpleInputTouched";

function App() {
  return (
    <div className="app">
      <h2>Lesson 199...</h2>
      <SimpleInput />
      <h2>Lesson 203. Touched validation</h2>
      <SimpleInputTouched />
      <h2>Lesson 206. Overall form validation</h2>
      <SimpleInputOverall />
      <h2>Lesson Task 5. More Inputs</h2>
      <SimpleInputMultiple />
      <h2>Lesson 207. Custom Hook</h2>
      <SimpleInputCustomHook />
      <h2>Lesson 208. Form</h2>
      <BasicForm />
      <h2>Lesson 212. UseReducer</h2>
      <BasicFormReducer />
    </div>
  );
}

export default App;
