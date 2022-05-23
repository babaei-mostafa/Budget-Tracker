import React, { createContext, useReducer, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

type BudgetContextProviderProps = {
  children: React.ReactNode
}

export enum ACTIONS {
  ADD_EXPENSE = 'add-expense',
  DELETE_EXPENSE = 'delete-expense'
}

type ExpensesType = {
  id: string
  name: string
  cost: number
}[]

type ActionAddExpenseType = {
  type: ACTIONS.ADD_EXPENSE
  payload: {
    name: string
    cost: number
  }
}

type ActionDeleteExpenseType = {
  type: ACTIONS.DELETE_EXPENSE
  payload: {
    id: string
  }
}

type ActionType = ActionAddExpenseType | ActionDeleteExpenseType

type BudgetCotextValue = {
  budget: number
  setBudget: React.Dispatch<React.SetStateAction<number>>
  expenses: ExpensesType
  dispatchExpenses: React.Dispatch<ActionType>
  inputName: string
  setInputName: React.Dispatch<React.SetStateAction<string>>
  inputCost: number
  setInputCost: React.Dispatch<React.SetStateAction<number>>
  myBudget: number
  setMyBudget: React.Dispatch<React.SetStateAction<number>>
}

const reducer = (expenses: ExpensesType, action: ActionType) => {
  switch (action.type) {
    case ACTIONS.ADD_EXPENSE:
      return [...expenses, newExpense(action.payload.name, action.payload.cost)]
    case ACTIONS.DELETE_EXPENSE:
      return expenses.filter(expense => {
        return expense.id !== action.payload.id      
      })
    default:
        return expenses
  }
}

const newExpense = (name: string, cost: number) => {
  return {id: uuidv4(), name: name, cost: cost}
}

export const BudgetContext = createContext<BudgetCotextValue | null>(null)

export const BudgetContextProvider = ({children}: BudgetContextProviderProps) => {

  const [budget, setBudget] = useState(0)
  const [expenses, dispatchExpenses] = useReducer(reducer, [] as ExpensesType)
  const [inputName, setInputName] = useState('')
  const [inputCost, setInputCost] = useState(0)
  const [ myBudget, setMyBudget ] = useState(0)

  const budgetContext = {budget, setBudget, expenses, dispatchExpenses, inputName, setInputName, inputCost, setInputCost, myBudget, setMyBudget}

  return(
    <BudgetContext.Provider value={budgetContext}>{children}</BudgetContext.Provider>
  )

}