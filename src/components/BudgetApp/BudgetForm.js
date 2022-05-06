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















// import React, {useContext, useState} from 'react'
// import { BudgetContext } from '../Context';

// const BudgetForm = () => {

//   const {inputBudget, setInputBudget} = useContext(BudgetContext)
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setInputBudget(inputBudget)
//     setInputBudget(0)
//   }

//   return (
//     <form className='budget-form' onSubmit={handleSubmit}>
//       <label>Add a budget</label>
//       <input
//         type="number"
//         value={inputBudget}
//         onChange={e => setInputBudget(e.target.value)}
//       />
//       <button>Submit</button>
//       <p>{inputBudget} $</p>
//     </form>
//   )
// }

// export default BudgetForm