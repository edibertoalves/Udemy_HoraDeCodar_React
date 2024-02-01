import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// 4 - custom hook
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 4 - custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  // 1 - resgatando dados da API
  // useEffect(() => {
  //   async function fetchData() {
  //     await fetch(url)
  //       .then((response) => response.json())
  //       .then((json) => setProducts(json))
  //   }
  //   fetchData()

  // }, [])

  // 2 - adicionando dados da API
  const handleSubmit = async (event) => {
    event.preventDefault();

    const product = {
      name,
      price,
    };

    // 2 - adicionando dados da API
    // 3 - carregamento dinâmico
    httpConfig(product, "POST");

    //  limpa os campos
    setName("");
    setPrice("");
  };

  // const handleDelete = async (id) => {
  //   await fetch(`${url}/${id}`, {
  //     method: "DELETE",
  //     headers: { "Content-Type": "application/json" },
  //   }).then((response) => {
  //     if (response.status == 200) {
  //       // atualiza o estado dos produtos
  //       setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  //     }
  //   })
  // };

  // 8- desafio de exclusão de produtos
  const handleRemove = async (id) => {
    httpConfig(id, "DELETE");
  }

  return (
    <>
      <div>
        <h1>Lista de Produtos</h1>
        {/* 6 - loading */}
        {loading && <p>Carregando Dados...</p>}
        {error && <p>{error}</p>}
        {!error && (
          <ul>
            {items &&
              items.map((product) => (
                <li key={product.id}>
                  {product.name} - R$ {product.price}
                  <button onClick={() => handleRemove(product.id)}>Remover</button>
                </li>
              ))}
          </ul>
        )}
      </div>
      {/* formulário para adicionar os produtos */}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              name="price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />            
          </label>

          {/* 7 - state de loading no submit do botão */}
          {loading && <input type="submit" disabled value="Aguarde..." />}
          {!loading && <input type="submit" value="Adicionar" />}
        </form>
      </div>
    </>
  );
}

export default App;
