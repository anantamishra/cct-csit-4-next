"use client";
import { useState } from "react";

export default function ToDoApp() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  // runs on input value change
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // executes on button click
  function handleAddTodo() {
    if (inputText.trim() !== "") {
      setTodos([...todos, inputText]);
      setInputText("");
    }
  }

  return (
    <div className="flex w-full min-h-screen flex-col justify-center items-center gap-4">
      <h1 className="text-2xl font-bold text-blue-600">Todo List App</h1>
      <div className="flex gap-4">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Add a new todo..."
          className="outline-none border-2 border-black focus:border-blue-500 py-2 px-4 rounded"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500  px-4 py-2 text-white font-semibold rounded"
        >
          Add Todo
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="h-4 w-4 bg-blue-500" />
            <li>{todo}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}
