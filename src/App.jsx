import React, { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(1)
  return (
    <div>
      Automatically Re-deployed
      <div>
        <button onClick={() => setCount(c => c-1)}>-</button>
          <h2>{count}</h2>
        <button onClick={() => setCount(c => c+1)}>+</button>
      </div>

      <div>
        <form action="">
          <label htmlFor="">Enter Your Name:</label>
          <input type="text" />

          <label htmlFor="">Enter Your Email:</label>
          <input type="text" />

          <label htmlFor="">Enter Your Password:</label>
          <input type="text" />
        </form>
      </div>
    </div>
  )
}

export default App