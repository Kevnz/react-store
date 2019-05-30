import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated } from 'react-spring'

import styles from './product-line.css'
const ProductLine = ({
  id,
  name,
  price,
  quantity,
  category,
  description,
  image,
  details,
  removeFromCart,
}) => {

  return (
    <div className={styles.lineItem}>
      <p>
        <a
          href="#"
          onClick={e => {
            e.preventDefault()
            removeFromCart()
          }}
        >
          <img className={styles.product} src={image} />
          {name} - {quantity} : {quantity * price}
          <FontAwesomeIcon icon={faMinusSquare} />
        </a>
      </p>
    </div>
  )
}

export default ProductLine
