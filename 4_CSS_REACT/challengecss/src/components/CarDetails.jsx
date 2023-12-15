import styles from './CarDetails.module.css'

const CarDetails = ({brand, model, color, year, km, fuel}) => {
  return (
    <div className={styles.card}>
      <h2>Brand: {brand}</h2>
      <h3>Model: {model}</h3>
      <p>Color: {color}</p>
      <p>Year: {year}</p>
      <p>Km: {km}</p>
      <p>Fuel: {fuel}</p>
    </div>
  )
}

export default CarDetails