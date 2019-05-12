import React from 'react'
import { useGet } from '@brightleaf/react-hooks'
import Loading from '../../components/loading'
import ProductCard from '../../components/product-card'
import styles from './home.css'

export default () => {
  const { data, error, loading } = useGet(
    'https://kev-pi.herokuapp.com/api/products'
  )
  if (error) {
    return <div>There was an error</div>
  }
  console.info('data', data)
  const prods = data.map(p => <ProductCard key={`product-${p.id}`} {...p} />)
  return (
    <main>
      <h2>Products</h2>
      {loading && <Loading />}
      <div className={styles.cards}>{prods}</div>
    </main>
  )
}
