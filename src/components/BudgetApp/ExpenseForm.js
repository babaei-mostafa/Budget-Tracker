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


















// import React, {useState} from 'react'

// const ExpenseForm = (props) => {

//   const [expense, setExpense] = useState("");
//   const [amount, setAmount] = useState(0)
  
//   const handleSubmit = e => {
//   e.preventDefault();

//   props.onSubmit({
//     id: Math.floor(Math.random * 10000),
//     name: expense 
//     })

//   setExpense("")
//   setAmount(0)
  
// }

//   return (
//     <form className="expense-form" onSubmit={handleSubmit}>

//       <div>
//         <label>Please Enter Your Expense</label>
//         <input
//           name='text'
//           placeholder='Add an Expence'
//           type="text"
//           value={expense}
//           onChange={e=>setExpense(e.target.value)}
//         />
//       </div>

//       <div>
//         <label>Please Enter Expense Amount</label>
//         <input
//           name='text'
//           placeholder='Add an Amount'
//           type="number"
//           value={amount}
//           onChange={e=>setAmount(e.target.value)}
//         />
//       </div>

//       <button>Submit</button>
      
//     </form>
//   )
// }

// export default ExpenseForm