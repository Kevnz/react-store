import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import styles from './product-card.css'
const ProductCard = ({
  id,
  name,
  price,
  category,
  description,
  image,
  details,
}) => {
  console.log('styles', styles)
  return (
    <div className={styles.card}>
      <img className={styles.product} src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <a href="#">
        {price}
        <FontAwesomeIcon icon={faCartPlus} />
      </a>
    </div>
  )
}

export default ProductCard
