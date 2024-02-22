// import { useContext } from "react"
// import { CounterContext }  from "../context/CounterContext"
import { ChangeCounter } from "../components/ChangeCounter"

// 4 - refatorando o componente
import { useCounterContext } from "../hooks/useCounterContext"

// 5 - context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext"

const Home = () => {

  const { counter } = useCounterContext()

  // 5 - context mais complexo
  const { color, dispatch } = useTitleColorContext()

  // 6 - alterando state complexo
  const setTitleColor = (color) => {
    dispatch({
      type: color
    });
  }

  return (
    <div>
      <h2  style={{ color }}>Home</h2>
      <p>Contador: {counter}</p> 
      <ChangeCounter />   
      {/* 6 - alterando contexto complexo */}
      <div>
        {/* <button onClick={() => setTitleColor('purple')}>Purple</button> */}
        <button onClick={() => setTitleColor('RED')}>Vermelho</button>
        <button onClick={() => setTitleColor('BLUE')}>Azul</button>
      </div>
    </div>
  )
}

export default Home