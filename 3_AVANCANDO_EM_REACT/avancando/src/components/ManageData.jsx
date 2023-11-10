import { useState } from "react";

const ManageData = () => {
  let someData = 10

  console.log(someData)

  { /* inicia a variavel com valor de 15 */}
  const [number, setNumber] = useState(15)

  console.log(number)

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar Variável</button>
      </div>
      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(25)}>Mudar o valor da variável novamente</button>
      </div>
    </div>
  );
};

export default ManageData;
