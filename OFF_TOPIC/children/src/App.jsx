import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// importa o componente mensagem
import Mensagem from './components/Mensagem.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* implementa o componente mensagem */}
      <Mensagem customValue = "testando outro parametro">
        Implementação do componente mensagem com o uso de <strong>children</strong>
      </Mensagem>
    </>
  )
}

export default App
