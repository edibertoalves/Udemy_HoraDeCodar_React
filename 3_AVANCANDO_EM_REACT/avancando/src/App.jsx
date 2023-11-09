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
      <div>
        <h1>Avançando em React</h1>
        {/* Imagem em public */}
        <div>
          <img src="/paisagem_praia.jpg" alt="Paisagem de Praia" />
        </div>

        {/* Imagem em assets */}
        <div>
          <img src={ SkylineCity } alt="" srcset="" />
        </div>
        <div>
          <ManageData />
        </div>
        <div>
          <ListRender />
        </div>
      </div>
    </>
  );
}

export default App;
