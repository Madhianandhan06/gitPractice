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
    </div>
  )
}

export default App