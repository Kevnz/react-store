import React, { createContext, useReducer } from 'react'

const initialState = {
  items: [],
  totalItems: 0,
  totalCost: 0,
  error: null,
}
const addToCart = ({ items, product, ...state }) => {
  if (items.filter(i => i.id === product.id).length === 0) {
    items.push({ ...product, quantity: 1 })
  } else {
    items.filter(i => product.id === i.id)[0].quantity++
  }
  const q = items.reduce((quantity, entry) => {
    return quantity + entry.quantity
  }, 0)
  const cost = items.reduce((amount, entry) => {
    return amount + entry.quantity * entry.price
  }, 0)

  return {
    ...state,
    totalCost: cost,
    totalItems: q,
    items,
    error: null,
  }
}
const removeFromCart = ({ items, product, ...state }) => {
  // const items = this.cart.items.filter(i => i.id !== product.id);
  const productIndex = items.findIndex(i => product.id === i.id)

  if (productIndex > -1 && items[productIndex].quantity > 1) {
    items[productIndex].quantity--
  } else if (productIndex > -1 && items[productIndex].quantity === 1) {
    items.splice(productIndex, 1)
  }
  const q = items.reduce((quantity, entry) => {
    return quantity + entry.quantity
  }, 0)
  const cost = items.reduce((amount, entry) => {
    return amount + entry.quantity * entry.price
  }, 0)
  return {
    ...state,
    totalCost: cost,
    totalItems: q,
    items,
    error: null,
  }
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'cart':
      return { ...state }
    case 'cart.add':
      const { product } = action.payload
      return addToCart({ ...state, product })
    case 'cart.remove':
      return removeFromCart({ ...state, product: action.payload.product })
    case 'cart.error':
      return {
        ...state,
        data: null,
        error: action.payload.error,
        loading: false,
      }
    default:
      return state
  }
}

export const CartContext = createContext(null)

export function Container({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export default Container
