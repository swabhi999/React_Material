import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../TodoContext";

function TodoList() {
  const { todos } = useContext(TodoContext);
  
  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="space-y-5">
      {/* Stats Section */}
      {totalCount > 0 && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 border-2 border-blue-100">
          <div className="flex justify-between items-center mb-3">
            <div>
              <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Progress</span>
              <p className="text-2xl font-bold text-slate-800 mt-1">
                {completedCount} <span className="text-base font-normal text-slate-500">of {totalCount}</span>
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-600">{percentage}%</div>
              <span className="text-xs text-slate-500 font-medium">Complete</span>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500 ease-out rounded-full shadow-md"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      )}

      {/* Todo Items */}
      <div className="space-y-3">
        {todos.length === 0 ? (
          <div className="text-center py-16 px-4">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-xl font-semibold text-slate-400 mb-2">No tasks yet!</p>
            <p className="text-sm text-slate-400">Add your first task above to get started</p>
          </div>
        ) : (
          todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        )}
      </div>
    </div>
  );
}
 export default TodoList