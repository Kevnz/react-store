import React, { useContext } from 'react'
import { Link } from '@reach/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../core/container'
import styles from './cart-indicator.css'
export default function CartIndicator() {
  const { totalItems } = useContext(CartContext)
  return (
    <div className={styles.cartIndicator}>
      <Link to="/checkout">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className={styles.amount}>{totalItems}</span>
      </Link>
    </div>
  )
}
