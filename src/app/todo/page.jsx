"use client";

import React, { useState, useEffect } from "react";

export default function ToDoApp() {
  // State variables
  const [todos, setTodos] = useState([]); // Stores the list of todos
  const [inputText, setInputText] = useState(""); // Stores the input text for adding new todos
  const [filter, setFilter] = useState("all"); // Stores the current filter option

  // Load todos from local storage on initial render
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to local storage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Event handler for input text change
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // Event handler for adding a new todo
  const handleAddTodo = () => {
    if (inputText.trim() !== "") {
      setTodos([
        ...todos,
        { id: Date.now(), text: inputText, completed: false },
      ]);
      setInputText("");
    }
  };

  // Event handler for pressing the "Enter" key to add a new todo
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  // Event handler for toggling todo completion status
  const handleToggleCompletion = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Event handler for deleting a todo
  const handleDeleteTodo = (id) => {
    // Confirm deletion with a dialog box
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this todo?"
    );
    if (isConfirmed) {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    }
  };

  // Event handler for changing filter option
  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  // Filter todos based on current filter option
  const filteredTodos =
    filter === "all"
      ? todos
      : filter === "completed"
      ? todos.filter((todo) => todo.completed)
      : todos.filter((todo) => !todo.completed);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100">
      {/* Main container */}
      <div className="w-full max-w-4xl p-8 bg-white rounded shadow-lg mt-8">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-4 text-blue-600 text-center">
          My ToDo List
        </h1>
        {/* Add Todo Input */}
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder="Add a new task..."
            className="outline-none border-b-2 border-blue-500 py-3 px-4 rounded-l mr-2 flex-grow"
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 text-white py-3 px-6 rounded-r"
          >
            Add Task
          </button>
        </div>
        {/* Filter Buttons */}
        <div className="flex items-center mb-4">
          <span className="mr-2 font-semibold">Filter:</span>
          <button
            className={`px-3 py-1 rounded mr-2 ${
              filter === "all"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-600"
            }`}
            onClick={() => handleFilterChange("all")}
          >
            All
          </button>
          <button
            className={`px-3 py-1 rounded mr-2 ${
              filter === "completed"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-600"
            }`}
            onClick={() => handleFilterChange("completed")}
            style={{ backgroundColor: filter === "completed" ? "#48BB78" : "" }}
          >
            Completed
          </button>
          <button
            className={`px-3 py-1 rounded mr-2 ${
              filter === "active"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-600"
            }`}
            onClick={() => handleFilterChange("active")}
            style={{ backgroundColor: filter === "active" ? "#EEA320" : "" }}
          >
            Active
          </button>
        </div>
        {/* List of Todos */}
        <ul className="space-y-2">
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded"
            >
              {/* Todo item */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleCompletion(todo.id)}
                  className="mr-2"
                />
                <span className={todo.completed ? "line-through" : ""}>
                  {todo.text}
                </span>
              </div>
              {/* Delete button */}
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700 bg-red-200 px-2 py-1 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
