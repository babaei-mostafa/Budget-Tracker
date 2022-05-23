import React, { useReducer, useState } from 'react'
import BudgetForm from './BudgetForm'
import { BudgetContextProvider } from './BudgetContext'
// import { BudgetContext } from './Context'
import { v4 as uuidv4 } from 'uuid'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'
import './ExpenseTracker.scss'
import logo from './photos/4928494-middle.png'

export const ACTIONS = {
  ADD_EXPENSE: 'add-expense',
  DELETE_EXPENSE: 'delete-expense'
}

const reducer = (expenses, action) => {
  switch (action.type) {
    case ACTIONS.ADD_EXPENSE:
      return [...expenses, newExpense(action.payload.name, action.payload.cost)]
    case ACTIONS.DELETE_EXPENSE:
      return expenses.filter(expense => {
        return expense.id !== action.payload.id
      })
    default:
      throw new Error()
  }
}

const newExpense = (name, cost) => {
  return {id: uuidv4(), name: name, cost: cost}
}

const ExpenseTracker = () => {

  // const [ budget, setBudget ] = useState(0)
  // const [ expenses, dispatchExpense ] = useReducer(reducer, [])
  // const [inputName, setInputName] = useState('')
  // const [inputCost, setInputCost] = useState(0)
  // const [ myBudget, setMyBudget ] = useState(0)

  // const contextValues = [budget, setBudget, expenses, dispatchExpense, inputName, setInputName, inputCost, setInputCost, myBudget, setMyBudget]

  return (

    <div className='expense-tracker-container'>

      <div className='header'>
        <h2>Budget Tracker</h2>
        <img className='logo' src={logo} alt='logo'/>
      </div>

      <div className='body'>
        {/* <BudgetContext.Provider value={contextValues}> */}
        <BudgetContextProvider>
          <BudgetForm />
          <ExpenseForm />
          <ExpenseList />
        </BudgetContextProvider>
          
        {/* </BudgetContext.Provider> */}
      </div>

    </div>
  )
}

export default ExpenseTracker