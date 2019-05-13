import React, { useContext } from 'react'
import { useGet } from '@brightleaf/react-hooks'
import Loading from '../../components/loading'
import ProductCard from '../../components/product-card'
import { CartContext } from '../../core/container'
import styles from './home.css'
export default () => {
  const { dispatch } = useContext(CartContext)
  const { data, error, loading } = useGet(
    'https://kev-pi.herokuapp.com/api/products'
  )
  if (error) {
    return <div>There was an error</div>
  }
  const prods = data.map(product => (
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
    <main>
      <h2>Products</h2>
      {loading && <Loading />}
      <div className={styles.cards}>{prods}</div>
    </main>
  )
}
