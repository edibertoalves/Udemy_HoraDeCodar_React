import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import SkylineCity from './assets/skyline_city.jpg'
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
        <h1>Avançando em React</h1>
        {/* Imagem em public */}
        <img srcSet="/paisagem_praia.jpg" src="/paisagem_praia.jpg" alt="Paisagem de Praia" />
        
        {/* Imagem em assets */}
        <img srcSet={ SkylineCity }  src={ SkylineCity }alt="" srcset="" />

        <ManageData />

        <ListRender />

      
    </>
  );
}

export default App;
