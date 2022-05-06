import React, { useContext } from 'react'
import { TodoContext } from './contexts'
import NewTodoItem from './NewTodoItem'

const TodoList = () => {

  const [,, todos, filter] = useContext(TodoContext)

  const filteredTodos = todos.filter(todo => {
        if (filter === 'ALL') {
          return true
        }
        if (filter === 'COMPLETE' && todo.complete) {
          return true
        }
        if (filter === 'INCOMPLETE' && !todo.complete) {
          return true
        }
  })

  return (
    <div>
      {filteredTodos.map(todo => (
        <NewTodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList