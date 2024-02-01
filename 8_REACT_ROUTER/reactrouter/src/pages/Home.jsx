import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import "./Home.css";

const Home = () => {
  const url = "http://localhost:3000/products";
  const { data: items, loading, error } = useFetch(url);

  return (
    <>
      <h2>Produtos</h2>
      {error && <p>{error}</p>}
      <ul className="products">
        {items &&
          items?.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$ {item.price}</p>
              {/* 4 - rota dinâmica */}
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>

      {/* {items?.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R${item.price}</p>
            <Link to={`/products/${item.id}`}>Detalhes</Link>
          </li>
        ))} */}
    </>
  );
};

export default Home;
