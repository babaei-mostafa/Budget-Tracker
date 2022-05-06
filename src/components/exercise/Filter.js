import React, { useContext } from 'react'
import { TodoContext } from './contexts'
import { ACTIONS } from './NewTodos'

const Filter = () => {

  const [, dispatch] = useContext(TodoContext)

  const handleAll = () => {
    dispatch({type: ACTIONS.SHOW_ALL})
  }

  const handleComplete = () => {
    dispatch({type: ACTIONS.SHOW_COMPLETE})
  }

  const handleIncomplete = () => {
    dispatch({type: ACTIONS.SHOW_INCOMPLETE})
  }

  return (
    <div>
      <button type='button' onClick={handleAll}>Show All</button>
      <button type='button' onClick={handleComplete}>Show Complete</button>
      <button type='button' onClick={handleIncomplete}>Show Incomplete</button>
    </div>
  )
}

export default Filter