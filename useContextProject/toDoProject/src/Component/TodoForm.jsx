import React, { useState, useContext } from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text.trim());
    setText("");
  };

  return (
    <div className="flex gap-3" onSubmit={handleSubmit}>
      <div className="flex-1 relative">
        <input
          type="text"
          className="w-full px-5 py-3.5 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900 placeholder-slate-400 font-medium transition-all duration-200 hover:border-slate-300 shadow-sm"
          placeholder="✨ What needs to be done?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSubmit(e);
            }
          }}
          autoFocus
        />
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold transition-all duration-200 active:scale-95 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!text.trim()}
      >
        Add Task
      </button>
    </div>
  );
}
export default  TodoForm