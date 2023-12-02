
const CarDetails = ({key, brand, km, color, newCar}) => { /* destructuring nos parâmetros da funçao */
  return (
    <div>
        <h2>Detalhes do Carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>Kilometragem: {km}</li>
            <li>Cor: {color}</li>
        </ul>
        {newCar && <p>Este carro é novo</p>}
    </div>
  )
}

export default CarDetails