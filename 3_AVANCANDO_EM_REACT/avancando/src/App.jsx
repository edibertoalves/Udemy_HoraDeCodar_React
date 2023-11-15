import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import SkylineCity from "./assets/skyline_city.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";

function App() {
  const [count, setCount] = useState(0);

  const name = "Fulano";
  const [UserName] = useState("Maria");

  return (
    <>
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <img
        srcSet="/paisagem_praia.jpg"
        src="/paisagem_praia.jpg"
        alt="Paisagem de Praia"
      />

      {/* Imagem em assets */}
      <img srcSet={SkylineCity} src={SkylineCity} alt="" srcset="" />

      <ManageData />

      <ListRender />

      <ConditionalRender />

      {/* props */}
      <ShowUserName name={UserName} />
      
      {/* destructuring */}
      <CarDetails brand="renault" km={87000} color="cinza" new={false} />

      {/* reaproveitando */}
      <CarDetails brand="Ford" km={0} color="vermelha" newCar={true} />
      <CarDetails brand="Fiat" km={4500} color="branca" new={false} />


    </>
  );
}

export default App;
