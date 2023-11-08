import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Avançando em React</h1>
        {/* Imagem em public */}
        <div>
          <img src="/paisagem_praia.jpg" alt="Paisagem de Praia" />
        </div>
      </div>
    </>
  );
}

export default App;
