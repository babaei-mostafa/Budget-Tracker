// Here, I will add a checkbox for practise. it has nothing to do with the Expense Tracker app.

import React, { useEffect, useState } from 'react'

const Checkbox = () => {
  
  const [checked, setChecked] = useState(false)

  
  // useEffect(() => {
  //    alert(`checked: ${checked.toString()}`)
  // })

  const toggle = () => {
    setChecked(checked => !checked)
  }
  
  return (
    <div>
      <input
        type='checkbox'
        value={checked}
        onChange={toggle}
        />
      {checked ? "checked" : "not checked"}
    </div>
  )
}

export default Checkbox