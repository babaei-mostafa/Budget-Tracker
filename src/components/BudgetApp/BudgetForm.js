import React, { useContext } from 'react'
import { BudgetContext } from './Context'
import './ExpenseTracker.scss'

const BudgetForm = () => {

  const [budget, setBudget, , , , , , , myBudget, setMyBudget] = useContext(BudgetContext)

  const handleSubmit = e => {
    e.preventDefault()
    setMyBudget(budget)
    setBudget(0)
  }

  return (

    <div className='budget'>

      <form className='budget-form' onSubmit={handleSubmit}>

        <div className='budget-input'>
          <label>Set Your Budget</label>
          <input
            type='number'
            value={budget}
            onChange={e => setBudget(e.target.value)}
          />
        </div>

        <button type='submit'>Set Budget</button>
        
      </form>

    <p>${myBudget}</p>

    </div>
  )
}

export default BudgetForm