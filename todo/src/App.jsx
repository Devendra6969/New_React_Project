import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TodoContext from "./contexts/TodoContext";
import Test from "./pages/Test";

const [todos, setTodos] = useState([]);  


const addTodo = (todo) => {
  
  
}

const toggleTodo = () => {

}

const updateTodo = () => {

}

function App() {
  return (
    <>
        <div className="min-h-screen w-full relative bg-horizon text-white">
          <Navbar />
          <Home />
        </div>
    </>
  );
}

export default App;
