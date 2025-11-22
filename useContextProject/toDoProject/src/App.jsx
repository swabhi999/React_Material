import React from "react";
import TodoProvider from "./TodoProvider";
import TodoForm from "./Component/TodoForm";
import TodoList from "./Component/TodoList";

function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
        <div className="w-full max-w-3xl mx-auto">
          {/* Header Card */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-2xl p-8 shadow-2xl">
            <h1 className="text-4xl font-bold text-white text-center mb-2">
              📝 Todo Manager
            </h1>
            <p className="text-center text-blue-100 font-medium">
              Stay organized and boost your productivity
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-b-2xl shadow-2xl p-8">
            {/* Form Section */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Add a new task
              </label>
              <TodoForm />
            </div>

            {/* Divider */}
            <div className="border-t-2 border-gray-200 my-8"></div>

            {/* Todo List Section */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                Your tasks
              </label>
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;