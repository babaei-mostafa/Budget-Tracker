import React, { useContext } from 'react'
import { BudgetContext } from './BudgetContext'
// import { BudgetContext } from './Context'
// import { ACTIONS } from './ExpenseTracker'
import { ACTIONS } from './BudgetContext'

const ExpenseForm = () => {

  // const [, , , dispatch, inputName, setInputName, inputCost, setInputCost] = useContext(BudgetContext)

  const budgetContext = useContext(BudgetContext)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (budgetContext!.inputName && budgetContext!.inputCost) {
      budgetContext!.dispatchExpenses({type: ACTIONS.ADD_EXPENSE, payload:{name: budgetContext!.inputName, cost: budgetContext!.inputCost}})
    }
    budgetContext!.setInputName('')
    budgetContext!.setInputCost(0)
  }

  const handleChangeInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    budgetContext!.setInputName(e.target.value)
  }

  const handleChangeInputCost = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCost = parseInt(e.target.value)
    budgetContext!.setInputCost(newCost)
  }

  return (
  
      <form className='expense-form' onSubmit={handleSubmit}>

        <div>
          <label>Your Expense</label>
          <input
            type='name'
            value={budgetContext!.inputName}
            onChange={handleChangeInputName}
          />
        </div>

        <div>
          <label>Your cost</label>
          <input
            type='number'
            value={budgetContext!.inputCost}
            onChange={handleChangeInputCost}
          />
        </div>

        <button type='submit'>Submit</button>
        
      </form>

  )
}

export default ExpenseForm