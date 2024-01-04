import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const url = "http://localhost:3000/products"

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([])

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  // 1 - resgatando dados da API
  useEffect(() => {
    async function fetchData() {
      await fetch(url)
        .then((response) => response.json())
        .then((json) => setProducts(json))      
    }
    fetchData()

  }, [])


  // 2 - adicionando dados da API
  const handleSubmit = async (event) => {
    event.preventDefault()

    const product = {
      name,
      price
    }
    
    //  2 - adicionando dados da API
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })

    // 3 - carregamento dinâmico
    const json = await response.json()
    setProducts((prevProducts) => [...prevProducts, json])
    
    //  limpa os campos
    setName("")
    setPrice("")

    // event.preventDefault()
    // const form = new FormData(event.target)
    // const name = form.get("name")
    // const price = form.get("price")
    // const json = JSON.stringify({ name, price })
    // const response = await fetch(url, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: json,
    // })
    // const data = await response.json()
    // setProducts((prevProducts) => [...prevProducts, data])
    // event.target.reset()
  }

  // 3 - excluindo dados da API
  const handleDelete = async (id) => {
    await fetch(`${url})/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })  

    // carregamento dinâmico dos dados após a exclusão
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id))    
  }
  

  return (
    <>
      <div>
        <h1>Lista de Produtos</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name} - R$ {product.price}</li> 
          ))}
        </ul>
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
          
          <button type="submit">Adicionar</button>
        </form>
      </div>

    </>
  )
}

export default App
