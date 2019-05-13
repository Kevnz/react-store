import React, { useContext } from 'react'
import { Button } from 'react-form-elements'
import { CartContext } from '../../core/container'
import Loading from '../../components/loading'
import ProductLineItem from '../../components/product-line'

export function Cart() {
  const { items, totalCost, dispatch, ...state } = useContext(CartContext)
  console.log('state', state)
  console.log('items', items)
  const prods = items.map(product => (
    <ProductLineItem
      key={`product-${product.id}`}
      {...product}
      removeFromCart={() => {
        dispatch({
          type: 'cart.remove',
          payload: { product },
        })
      }}
    />
  ))
  return (
    <div>
      <div className="checkout">{prods}</div>
      <div>Total Cost: ${totalCost}</div>
      <Button className="primary-btn">Purchase</Button>
    </div>
  )
}

export default Cart
