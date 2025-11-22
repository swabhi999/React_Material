import React from "react";
import TodoProvider from "./TodoProvider";
import TodoForm from "./Component/TodoForm";
import TodoList from "./Component/TodoList";
import "./App.css";

function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 px-4 sm:py-12">
        <div className="w-full max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-block mb-4 relative">
              <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20"></div>
              <span className="text-7xl relative">✓</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Task Manager Pro
            </h1>
            <p className="text-lg text-slate-600 font-medium">
              Stay organized, focused, and productive 🚀
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-slate-200">
            {/* Form Section */}
            <div className="mb-10">
              <label className="block text-sm font-bold text-slate-700 mb-4 uppercase tracking-wider flex items-center gap-2">
                <span className="text-lg">➕</span>
                Add New Task
              </label>
              <TodoForm />
            </div>

            {/* Divider */}
            <div className="relative my-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-slate-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-white text-sm font-semibold text-slate-500">YOUR TASKS</span>
              </div>
            </div>

            {/* Todo List Section */}
            <div>
              <TodoList />
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8 text-slate-500 text-sm">
            Made with ❤️ using React & Tailwind CSS
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;