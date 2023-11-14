import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);

  const [name, setName] = useState( );

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se for "true", sim!</p>}
      {!x && <p>agora x falso!</p>}
      <h1>if ternário</h1>
      <button onClick={() => setName("João")}>clica aqui</button>
      {name === "João" ? (
        <div>nome "João" encontrado</div>
      ) : (
        <div>Nome não encontrado</div>
      )}
    </div>
  );
};

export default ConditionalRender;
