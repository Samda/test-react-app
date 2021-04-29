import React from 'react'
import { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <h1>This is Counter App</h1>
      <button id="increment-btn" onClick={() => { setCounter(counter + 1) }}>Increment</button>
      <button id="decrement-btn" onClick={() => { setCounter(counter - 1) }}>Decrement</button>
      <div id="counter-value">{counter}</div>
    </div>
  )
}

export default Counter