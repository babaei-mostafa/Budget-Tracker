import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import AddTodo from './AddTodo';
import { TodoContext } from './contexts';
import Filter from './Filter';
import TodoList from './TodoList';


const initalTodos = [
  {
    id: uuidv4(),
    task: 'Learn React',
    complete: true,
  },
  {
    id: uuidv4(),
    task: 'Learn Firebase',
    complete: true,
  },
  {
    id: uuidv4(),
    task: 'Learn GraphQL',
    complete: false,
  },
];

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE: 'toggle-todo',
  SHOW_ALL: 'show-all',
  SHOW_COMPLETE: 'show-complewte',
  SHOW_INCOMPLETE: 'show-incomplete'
}

const addTodoReducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.task)]
    case ACTIONS.TOGGLE:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {...todo, complete: !todo.complete}
        }
        return todo
      })
    default:
      throw new Error()
  }
}

const newTodo = task => ({ id: uuidv4(), task: task, complete: false })

const filterReducer = (filter, action) => {
  switch (action.type) {
    case ACTIONS.SHOW_ALL:
      return 'ALL'
    case ACTIONS.SHOW_COMPLETE:
      return 'COMPLETE'
    case ACTIONS.SHOW_INCOMPLETE:
      return 'INCOMPLETE'
    default:
      throw new Error()
  }
}

const NewTodos = () => {

  const [todos, dispatchTodos] = useReducer(addTodoReducer, initalTodos)
  const [filter, dispatchFilter] = useReducer(filterReducer, 'ALL')



  return (
    <div>
      <TodoContext.Provider value={[dispatchTodos, dispatchFilter, todos, filter]}>
        <Filter />
        <TodoList />
        <AddTodo />
      </TodoContext.Provider>
    </div>
  )
}

export default NewTodos