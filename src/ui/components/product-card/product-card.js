import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../core/container'
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
  const { dispatch, ...state } = useContext(CartContext)
  console.log('cart state', state)
  return (
    <div className={styles.card}>
      <img className={styles.product} src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <a
        href="#"
        onClick={e => {
          e.preventDefault()
          dispatch({
            type: 'cart.add',
            payload: { product: { id, name, price } },
          })
        }}
      >
        {price}
        <FontAwesomeIcon icon={faCartPlus} />
      </a>
    </div>
  )
}

export default ProductCard
