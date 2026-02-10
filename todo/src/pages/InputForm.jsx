import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTodo } from "@/contexts";

function InputForm() {
  const { addTodo } = useTodo();
  const [task, setTask] = useState("");

  const addToTask = (e) => {
    e.preventDefault();
    if (!task) return;
    addTodo({ todo: task, completed: false });
    setTask("");
  };

  return (
    <form onSubmit={addToTask} className="flex gap-2 my-4">
      <Input
        type="text"
        placeholder="Write Todo..."
        className="flex-1 bg-white/20 border-none text-white placeholder:text-gray-300 focus-visible:ring-offset-0 focus-visible:ring-white/50"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white px-8 shrink-0"
      >
        ADD
      </Button>
    </form>
  );
}

export default InputForm;
