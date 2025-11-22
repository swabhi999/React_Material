import React, { useContext, useState } from "react";
import { TodoContext } from '../TodoContext';

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
    <div className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 ${
      todo.completed 
        ? "bg-gradient-to-r from-green-50 to-emerald-50 border-green-200" 
        : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-md"
    }`}>
      {/* Custom Checkbox */}
      <label className="relative flex items-center cursor-pointer group">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={todo.completed}
          onChange={handleToggle}
        />
        <div className={`w-6 h-6 rounded-lg border-2 transition-all duration-200 flex items-center justify-center ${
          todo.completed 
            ? "bg-green-500 border-green-500" 
            : "border-slate-300 group-hover:border-blue-400"
        }`}>
          {todo.completed && (
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </label>

      {/* Text Input */}
      <input
        type="text"
        className={`flex-1 bg-transparent outline-none font-medium text-base transition-all px-2 py-1 rounded ${
          isTodoEditable 
            ? "border-2 border-blue-500 bg-blue-50" 
            : "border-2 border-transparent"
        } ${
          todo.completed 
            ? "line-through text-slate-500" 
            : "text-slate-800"
        }`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
            todo.completed
              ? "text-slate-400 cursor-not-allowed bg-slate-100"
              : isTodoEditable
              ? "text-white bg-green-500 hover:bg-green-600 shadow-md hover:shadow-lg"
              : "text-blue-600 bg-blue-50 hover:bg-blue-100 hover:shadow-md"
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
        >
          {isTodoEditable ? "💾 Save" : "✏️ Edit"}
        </button>

        <button
          className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
          onClick={() => deleteTodo(todo.id)}
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}
export default TodoItem