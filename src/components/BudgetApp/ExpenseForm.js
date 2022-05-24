import React, { useContext } from 'react'
import { BudgetContext } from './Context'
import { ACTIONS } from './ExpenseTracker'

const ExpenseForm = () => {

  const [, , , dispatch, inputName, setInputName, inputCost, setInputCost] = useContext(BudgetContext)

    const handleSubmit = e => {
    e.preventDefault()
    if (inputName && inputCost) {
      dispatch({type: ACTIONS.ADD_EXPENSE, payload:{name: inputName, cost: inputCost}})
    }
    setInputName('')
    setInputCost(0)
  }

  return (
  
      <form className='expense-form' onSubmit={handleSubmit}>

        <div>
          <label>Your Expense</label>
          <input
            type='name'
            value={inputName}
            onChange={e => setInputName(e.target.value)}
          />
        </div>

        <div>
          <label>Your cost</label>
          <input
            type='number'
            value={inputCost}
            onChange={e => setInputCost(e.target.value)}
          />
        </div>

        <button type='submit'>Submit</button>
        
      </form>

  )
}

export default ExpenseForm