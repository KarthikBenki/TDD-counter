import "./App.css";
import Counter from "./components/Counter/Counter";
import AsynchCounter from "./components/asynchCounter/asynchCounter";
import TestAxios from "./components/TestAxios/TestAxios";

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter />
      
      <h1>AsynchCounter</h1>
      <AsynchCounter />

      <h1>Test Axios</h1>
      <TestAxios url="https://api.github.com/users/KarthikBenki" />
    </div>
  );
}

export default App;
