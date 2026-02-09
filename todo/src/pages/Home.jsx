import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import TodoContext from "@/contexts/TodoContext";


function Home() {

  const [todos, setTodos] = useState([]);



  const[task, setTask] = useState("")

    const addTask = () => {
        console.log("Task added", task);
        setTodos("")
        
    }

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, {id: crypto.randomUUID(), ...todo}])

  }  

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id)=== id ? todo : prevTodo))

  }
  

  return (
    <TodoContext value={{ todos, addTodo, toggleTodo, updateTodo }}>

      <div className="my-4 flex items-center">
        <Input
          className="w-[45%]"
          placeholder="Enter text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          
        />

        <Button variant="outline" className="mx-4" onClick={addTask}>
          ADD
        </Button>
      </div>

    </TodoContext>
  );
}

export default Home;
