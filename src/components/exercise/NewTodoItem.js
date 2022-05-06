import React, { useContext } from 'react'
import { TodoContext } from './contexts'
import { ACTIONS } from './NewTodos'

const NewTodoItem = ({todo}) => {

  const [dispatch] = useContext(TodoContext)

  const handleChangeCheckbox = todo => {
    dispatch({type: ACTIONS.TOGGLE, payload: {id: todo.id}})
  }

  return (
    <div>
      <li>
        {todo.task}
        <input
          type='checkbox'
          checked={todo.complete}
          onChange={() => handleChangeCheckbox(todo)}
        />
      </li>
    </div>
  )
}

export default NewTodoItem