import { useContext } from "react"

import { CounterContext } from "../context/CounterContext";

import { useTitleColorContext } from "../hooks/useTitleColorContext"


const About = () => {

  const { counter } = useContext(CounterContext);

  const { color } = useTitleColorContext()

 
  return (
    <div>
      <h2 style={{ color }}>Sobre</h2>
      <p>Contador: {counter}</p>
      
    </div>
  );
};

export default About;
