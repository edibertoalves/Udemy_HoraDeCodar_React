import { Link, useParams } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";

const Product = () => {
  // 4- rota dinamica
  const { id } = useParams();

  const url = `http://localhost:3000/products/${id}`;

  // 5 - fazer fetch de um item especifico
  const { data: product, loading, error } = useFetch(url);

  return (
    <>
      <p>id do produto: {id}</p>
      {error && <p>{error}</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>R${product.price}</p>
          {/* 6 - nested route */}
          <Link to={`/products/${product.id}/details`} >Mais Informações</Link>
        </div>
      )}
    </>
  );
};

export default Product;
