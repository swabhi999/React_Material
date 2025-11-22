import React, { useState } from 'react'
import { TodoContext } from './TodoContext'

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([])

  const value = {
    todos,
    addTodo: (text) => {
      setTodos(prev => [...prev, { id: Date.now(), text, completed: false }])
    },
    editTodo: (id, newText) => {
      setTodos(prev => prev.map(todo => 
        todo.id === id ? { ...todo, text: newText } : todo
      ))
    },
    deleteTodo: (id) => {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    },
    toggleTodo: (id) => {
      setTodos(prev => prev.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ))
    },
  }

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider