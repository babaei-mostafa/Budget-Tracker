import React, { useContext } from 'react'
// import { BudgetContext } from './Context'
import { BudgetContext } from './BudgetContext'
import './ExpenseTracker.scss'

const BudgetForm = () => {

  // const [budget, setBudget, , , , , , , myBudget, setMyBudget] = useContext(BudgetContext)
  const budgetContext = useContext(BudgetContext)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    budgetContext!.setMyBudget(budgetContext!.budget)
    budgetContext!.setBudget(0)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value)
    budgetContext!.setBudget(newValue)
  } 
    

  return (

    <div className='budget'>

      <form className='budget-form' onSubmit={handleSubmit}>

        <div className='budget-input'>
          <label>Set Your Budget</label>
          <input
            type='number'
            value={budgetContext!.budget}
            onChange={handleChange}
          />
        </div>

        <button type='submit'>Set Budget</button>
        
      </form>

    <p>${budgetContext!.myBudget}</p>

    </div>
  )
}

export default BudgetForm