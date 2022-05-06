import React, { useContext, useState } from 'react'
import { TodoContext } from './contexts'
import { ACTIONS } from './NewTodos' 

const AddTodo = () => {

  const [task, setTask] = useState('')
  const [dispatch] = useContext(TodoContext)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({type: ACTIONS.ADD_TODO, payload:{task: task}})
    setTask('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default AddTodo