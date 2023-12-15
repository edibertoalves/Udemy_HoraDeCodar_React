import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent' 
import Title from './components/Title'

function App() {
  const [count, setCount] = useState(0)

  var n = 9;

  const [name] = useState('Ediberto')

  const redTitle = false;

  return (
    <>
      {/* CSS Global */}
      <h1>React com CSS</h1>

      {/* CSS de componente */}
      <MyComponent />
      <p>Este paragrafo é do App.jsx</p>

      {/* css inline */}
      <p style={{ color: 'red', padding: '25px', borderTop: '1px solid red' }}>
        Este elemento foi estilizado de forma inline
      </p>
      <p style={{ color: 'red', padding: '25px', borderTop: '1px solid red' }}>
        Este elemento foi estilizado de forma inline
      </p>

      {/* css inlne dinamico */}
      <h2 style={n < 10 ? ({ color: 'purple' }) : ({ color: 'pink' })}>css dinâmico</h2>
      <h2 style={n > 10 ? ({ color: 'purple' }) : ({ color: 'pink' })}>css dinâmico</h2>
      <h2 style={
                  name === "Ediberto" 
                    ? ({ color: 'green', backgroundColor: '#000' }) 
                    : null 
                }>
        Teste Nome
      </h2>

      {/* classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter uma classe dinâmica
      </h2>

      {/* CSS modules */}
      <Title />


    </>
  )
}

export default App
