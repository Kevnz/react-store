import React, { useContext, useRef } from 'react'
import { usePost } from '@brightleaf/react-hooks'

import { CartContext } from '../../core/container'
import Loading from '../../components/loading'
import ProductLineItem from '../../components/product-line'
import Modal from '../../components/modal'
import CreditCardForm from '../../components/creditcard-form'

export function Cart() {
  const { items, totalCost, dispatch, ...state } = useContext(CartContext)
  const { data, error, loading, postData } = usePost(
    'https://kev-pi.herokuapp.com/api/long/wait'
  )
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
  const modalRef = useRef()
  return (
    <div>
      <div className="checkout">{prods}</div>
      <div>Total Cost: ${totalCost}</div>
      <Modal
        buttonText="Purchase"
        buttonClass="primary-btn"
        show={false}
        ref={modalRef}
      >
        <CreditCardForm
          onSubmit={async values => {
            if (loading) return

            const { result } = await postData(values)
            if (result) {
              dispatch({
                type: 'cart.complete',
              })
              modalRef.current.hide()
            }
          }}
          onCancel={e => {
            modalRef.current.hide()
          }}
        />
      </Modal>
    </div>
  )
}

export default Cart
