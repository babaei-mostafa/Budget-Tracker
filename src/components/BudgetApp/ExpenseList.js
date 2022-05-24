import React, { useContext } from 'react'
import { BudgetContext } from './Context'
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {

  const [budget, , expenses, , , , , , myBudget] = useContext(BudgetContext)

  const totalExpense = expenses.reduce((total, expense) => { return total + parseInt(expense.cost)}, 0)

  return (

    <div className='expense-list-area'>

      <div>
        <p>Total Expenses: ${totalExpense}</p>
        <p>Remaining: ${parseInt(myBudget) - totalExpense}</p>
      </div>

      <div className='expense-list'>
        <h3>All Expenses:</h3>
        <ExpenseItem />
      </div>

    </div>
  )
}

export default ExpenseList