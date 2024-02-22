// 3 - alterando o contexto
import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

export const ChangeCounter = () => {
  const { counter, setCounter } = useContext(CounterContext)
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+ 1</button>
      <button onClick={() => setCounter(counter - 1)}>- 1</button>      
    </div>
  )
}
