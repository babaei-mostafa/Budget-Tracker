import React, { useContext } from 'react'
import { BudgetContext } from './Context'
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {

  const [budget, , expenses, , , , , , myBudget] = useContext(BudgetContext)

  const totalExpense = expenses.reduce((total, expense) => { return total + parseInt(expense.cost)}, 0)

  // let totalExpense = 0
  // expenses.forEach(expense => totalExpense += parseInt(expense.cost))

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













// import React, { useState } from 'react'
// import ExpenseItem from '../ExpenseItem/ExpenseItem';

// const ExpenseList = () => {

//   const [expenses, setExpenses] = useState([
//     { id: 12, name: 'shopping', cost: 40 },
//     { id: 13, name: 'holiday', cost: 400 },
//     { id: 14, name: 'car service', cost: 50 },
// 	]);

//   const handleDelete = id => {
//     const newExpenses = expenses.filter(expense => expense.id !== id)
//     setExpenses(newExpenses)
//   }

//   return (
//     <div>
//       <h1>ExpenseList</h1>
//       <ul>
//         {expenses.map(expense => (
//           <ExpenseItem
//             // expenses={expenses}  
          
//             id={expense.id}
//             name={expense.name}
//             cost={expense.cost}
//             handleDelete={handleDelete}
//           />  
//         ))}
//       </ul>

//     </div>
//   )
// }

// export default ExpenseList