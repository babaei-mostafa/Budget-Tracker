import React, { useReducer } from 'react'

const initialTodos = [
    {
      id: "a",
      task: "learn React",
      complete: false
    },
    {
      id: "b",
      task: "learn firebase",
      complete: false
    }
]

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'DO_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return {...todo, complete: true}
        } else {
          return todo
        }
      })
    case 'UNDO_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return {...todo, complete: false}
        } else {
          return todo
        }
      })
    default:
      return state
  }
}



const Todo = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialTodos)

  const handleChange = todo => {
    dispatch({ type: todo.complete ? 'UNDO_TODO' : 'DO_TODO', id: todo.id });
  };

  return (
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <label>
              {todo.task}
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleChange(todo)}
              />
            </label>
          </li>
        ))}
      </ul>
  )
}

export default Todo