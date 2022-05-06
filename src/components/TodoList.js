import React, { useReducer, useState } from 'react'
import TodoItem from './TodoItem'

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
}

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {...todo, complete: !todo.complete}
        }
        return todo
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => 
        todo.id !== action.payload.id
      )
    default:
      return todos
  }
}

const newTodo = name => {
  return {id: Date.now(), name: name, complete: false}
}

const TodoList = () => {

  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState("") 

  const handleSubmit = e => {
    e.preventDefault()

    //we add "if (name) {}"" to prevent it from submitting an empty todo
    if (name) {
      dispatch({type: ACTIONS.ADD_TODO, payload: {name: name}})
      setName("")
    }
  }

  // const handleToggle = () => {
  //   dispatch({ type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id} })
  // }

  console.log(todos)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </form>
      <ul>
        {todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} dispatch={dispatch}/>
        ))}
      </ul>
      
    </>
  )
}

export default TodoList