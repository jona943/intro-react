import { useState } from 'react'
import MyComponent from './components/montaje'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Priemer componente</h1>
      <MyComponent /> 
    </>
  )
}

export default App;