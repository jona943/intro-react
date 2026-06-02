import { useState } from 'react'
import DatosAPI from './componentes/datos-api'
import ExpensiveCalculationComponent from './componentes/lista-num'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section>
      <h2 style={{textAlign: 'center', color: '#8264y', fontFamily: 'revert-layer', fontSize: '40px'}}>Componente API</h2>
      <DatosAPI/>
      <ExpensiveCalculationComponent/>

    </section>
    </>
  )
}

export default App
