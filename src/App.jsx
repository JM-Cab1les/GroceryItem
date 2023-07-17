import { useState } from 'react'
import './style.css'
import GroceryComponent from './component/GroceryComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <GroceryComponent/>
      </div>
    </>
  )
}

export default App
