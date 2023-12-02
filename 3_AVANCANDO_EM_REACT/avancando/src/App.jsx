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
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";

function App() {
  const [count, setCount] = useState(0);

  const name = "Fulano";
  const [UserName] = useState("Maria");

  const cars = [
    {id: 1, brand: 'Ferrari', color: 'Amarela', newCar: true, km: 0},
    {id: 2, brand: 'BMW', color: 'Preta', newCar: false, km: 32157},
    {id: 3, brand: 'Audi', color: 'Azul', newCar: false, km: 968420},
  ]

  function showMessage() {
    console.log("evento do componente pai")
  }

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
      <CarDetails brand="Fiat" km={4500} color="branca" newCar={false} />

      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar}/>        
      ))}

      {/* fragment */}
      <Fragment propFragment="Teste Fragment"/>

      {/* children */}
      <Container myValue = "testando">
        <p>e este é o conteúdo</p>  
      </Container>

      {/* executar função como props */}
      <ExecuteFunction myFunction={showMessage}/>

    </>
  );
}

export default App;
