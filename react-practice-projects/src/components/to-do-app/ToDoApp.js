import React from 'react'
import { useState, useEffect } from 'react'
import { TodoProvider } from './contexts/TodoContext'
import TodoForm from './TodoForm'
import TodoItems from './TodoItems'

export const ToDoApp = () => {
  const [todos, setTodos] = useState([])
   
  const addTodo = (todo) => {
    setTodos((oldTodo) => [{ id : Date.now(), ...todo}, ...oldTodo]);
  }

  const updateTodo = (id, todo) => {
    setTodos((oldTodos) => oldTodos.map((currentTodo) => (currentTodo.id == id ? todo : currentTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((oldTodos) => oldTodos.filter((currentTodo) => (currentTodo.id !== id)))
  }

  const markComplate = (id) => {
    setTodos((oldTodos) => oldTodos.map((oldTodo) => 
      (oldTodo.id === id ? {...oldTodo, completed: !oldTodo.completed} : oldTodo)))
    setTodos((todos) => sortTodos(todos));
  }

  // used for getting value from local storge and setting into state to render todos
  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos"));

    if(localTodos && localTodos.length > 0) {
      setTodos(sortTodos(localTodos));
    }
  }, [])

  // used to set new todo into local storage for a track
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])

  function sortTodos(data){
    return data.slice().sort((a, b) => {
      if (a.completed === b.completed) {
        return 0;
      }
      return a.completed ? 1 : -1;
    });
  }

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, markComplate}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
                {
                  todos.map((todo) => (
                    <div className="w-full" key={todo.id}>
                      <TodoItems todo={todo}/>
                    </div>
                  ))
                }
            </div>
        </div>
      </div> 
    </TodoProvider>
  )
}
