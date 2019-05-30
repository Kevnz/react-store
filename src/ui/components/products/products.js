import React from 'react'
import ProductCard from '../product-card'

import styles from './products.css'
export default ({ products, dispatch }) => {
  const prods = products.map(product => (
    <ProductCard
      key={`product-${product.id}`}
      {...product}
      addToCart={() => {
        dispatch({
          type: 'cart.add',
          payload: { product },
        })
      }}
    />
  ))
  return (
    <div style={{ border: '1px solid black' }}>
      <div className={styles.cards}>{prods}</div>
    </div>
  )
}
