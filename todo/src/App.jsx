import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TodoContext from "./contexts/TodoContext";



addTodo = () => {
  
}


function App() {
  return (
    <>
      <TodoContext value={{  todos, addTodo, toggleTodo, updateTodo }}>
        <div className="min-h-screen w-full relative bg-horizon text-white">
          <Navbar />
          <Home />
        </div>
      </TodoContext>
    </>
  );
}

export default App;
