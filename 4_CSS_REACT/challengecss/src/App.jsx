import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CarDetails from './components/CarDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Header */}
      <div>
        <h1 className="title">Cars Showroom</h1>
      </div>

      <div>
        {/* Cars */}
        <CarDetails brand="Toyota" model="Corolla" color="Red" year="2022" km="10000" fuel="Gasoline" />
        <CarDetails brand="Honda" model="Civic" color="Blue" year="2021" km="20000" fuel="Gasoline" />
        <CarDetails brand="Volkswagen" model="Fusca" color="White" year="2020" km="30000" fuel="Gasoline" />

      </div>
    </>
  )
}

export default App
