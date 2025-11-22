import React, { useContext, useState } from "react";
import { TodoContext } from '../TodoContext'

function TodoItem({ todo }) {
  const { toggleTodo, editTodo, deleteTodo } = useContext(TodoContext);
  const [todoMsg, setTodoMsg] = useState(todo.text);
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleSave = () => {
    const trimmed = todoMsg.trim();
    if (!trimmed) return;
    editTodo(todo.id, trimmed);
    setIsTodoEditable(false);
  };

  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all duration-300 ${
        todo.completed 
          ? "bg-gradient-to-r from-green-100 to-emerald-100 border-green-300" 
          : "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-300 hover:border-blue-400"
      }`}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        className="w-5 h-5 cursor-pointer accent-green-600 rounded"
        checked={todo.completed}
        onChange={handleToggle}
      />

      {/* Text Input */}
      <input
        type="text"
        className={`flex-1 bg-transparent outline-none font-medium transition-all duration-300 ${
          isTodoEditable 
            ? "border-b-2 border-blue-500 px-2" 
            : "border-transparent"
        } ${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      {/* Edit/Save Button */}
      <button
        className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 font-semibold ${
          todo.completed
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 text-white hover:scale-110"
        }`}
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            handleSave();
          } else {
            setIsTodoEditable(true);
          }
        }}
        disabled={todo.completed}
        title={isTodoEditable ? "Save" : "Edit"}
      >
        {isTodoEditable ? "💾" : "✏️"}
      </button>

      {/* Delete Button */}
      <button
        className="w-9 h-9 rounded-lg flex items-center justify-center bg-red-500 hover:bg-red-600 text-white transition-all duration-300 hover:scale-110 font-semibold"
        onClick={() => deleteTodo(todo.id)}
        title="Delete"
      >
        🗑️
      </button>
    </div>
  );
}

export default TodoItem;