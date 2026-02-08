import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


function Home() {
    const[task, setTask] = useState("")

    const addTask = () => {
        console.log("Task added", task);
        setTask("")
        
    }
  

  return (
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
  );
}

export default Home;
