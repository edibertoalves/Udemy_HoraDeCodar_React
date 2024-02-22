import { useContext } from "react"
import { CounterContext } from "../context/CounterContext";
import { ChangeCounter } from "../components/ChangeCounter";

const Products = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h2>Produtos</h2>
      <p>Contador: {counter}</p>
      <ChangeCounter />
    </div>
  )
}

export default Products