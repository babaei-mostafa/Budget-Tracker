import React, { useContext } from 'react'
// import { BudgetContext } from './Context'
// import { ACTIONS } from './ExpenseTracker'
import { ACTIONS, BudgetContext } from './BudgetContext';
import { FaTrash } from "react-icons/fa";

const ExpenseItem = () => {

  // const [, , expenses, dispatch] = useContext(BudgetContext)
  const budgetContext = useContext(BudgetContext)

  const handleDelete = (id: string) => {
    budgetContext!.dispatchExpenses({type: ACTIONS.DELETE_EXPENSE, payload:{id: id}})
  }

  return (
    <div>
      <ul>
        {budgetContext!.expenses.map(expense => (
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








// import React from 'react'

// const ExpenseItem = (props) => {
//   return (
//     <li key={props.id}>
      
//         <span>{props.id}</span>
      
//         {props.name}
      
//         {props.cost} $
      
      
//         <button onClick={() => props.handleDelete(props.id)}>Delete Expense</button>
      
//     </li>
//   )
// }

// export default ExpenseItem