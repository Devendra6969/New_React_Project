import { createContext, useContext } from "react";

const TodoContext =  createContext(
    todos = [
        
    {
        id:1,
        todo:"complete Task",
        completed: false
    }
],
addTodo = (todo) => {},
deleteTodo = (id) => {},
updateTodo = (id, todo) => {},
toggleTodo = (id) => {}
)


export default useTodo = () => {
    return useContext(TodoContext);
}

