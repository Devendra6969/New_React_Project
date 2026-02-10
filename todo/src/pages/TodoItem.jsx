import React, { useState } from "react";
import { useTodo } from "@/contexts"; // Import your custom hook
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LiveClock from "@/components/LiveClock";
function TodoItem({ todo }) {
  // 1. Get functions from Context
  const { updateTodo, deleteTodo, toggleTodo } = useTodo();

  // 2. Local State for UI handling
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  // 3. Define Handlers
  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleTodo(todo.id);
  };

  return (
    <Card
      className={`my-3 max-w-xl mx-auto ${todo.completed ? "bg-gray-900" : "bg-background"}`}
    >
      <div className="flex items-center gap-3 px-4 py-2 border rounded-md focus-within:ring-2 focus-within:ring-ring">
        {/* CHECKBOX */}
        <Checkbox
          checked={todo.completed}
          onCheckedChange={toggleCompleted} 
          className="cursor-pointer"
        />

        {/* INPUT FIELD */}
        <Input
          type="text"
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
          className={`
            flex-1 border-none bg-transparent px-2 py-1
            focus-visible:ring-0
            ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"}
            ${todo.completed ? "line-through text-gray-500" : ""}
          `}
        />


        <Button
          variant="ghost"
          className="cursor-pointer text-sm"
          onClick={() => {
            if (todo.completed) return; // Prevent editing if completed

            if (isTodoEditable) {
              editTodo();
            } else {
              setIsTodoEditable((prev) => !prev);
            }
          }}
          disabled={todo.completed}
        >
          {isTodoEditable ? "📁" : "✏️"}
        </Button>

        {/* DELETE BUTTON */}
        <Button
          variant="ghost"
          onClick={() => deleteTodo(todo.id)}
          className="text-muted-foreground hover:text-destructive cursor-pointer"
        >
          ❌
        </Button>
        <LiveClock />
      </div>
    </Card>
  );
}

export default TodoItem;
