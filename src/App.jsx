import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/addTodo";

function App() {
  return (
    <>
      <div className="text-center">
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
