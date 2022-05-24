import React, { useContext } from 'react'
import { BudgetContext } from './Context'
import { ACTIONS } from './ExpenseTracker'
import { FaTrash } from "react-icons/fa";

const ExpenseItem = ({ expense }) => {

  const [, , expenses, dispatch] = useContext(BudgetContext)

  const handleDelete = (id) => {
    dispatch({type: ACTIONS.DELETE_EXPENSE, payload:{id: id}})
  }

  return (
    <div>
      <ul>
        {expenses.map(expense => (
          <li className='expense-item' key={expense.id}>
            <span>{expense.name}:</span>
            <span>${expense.cost}</span> 
            <button onClick={() => handleDelete(expense.id)}>
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ExpenseItem