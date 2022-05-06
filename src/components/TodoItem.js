import React from 'react'
import { ACTIONS } from './TodoList'

const TodoItem = ({todo, dispatch}) => {

  const handleToggle = () => {
    dispatch({type:ACTIONS.TOGGLE_TODO, payload:{id: todo.id}})
  }

  const handleDelete = () => {
    dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})
  }

  return (
      <li>
        <p style={{color: todo.complete ? 'black' : 'grey'}}>{todo.name}</p>
        <button onClick={handleToggle}>Toggle</button>
        <button onClick={handleDelete}>Delete</button>
        
      </li>
  )
}

export default TodoItem