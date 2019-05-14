import React, { createContext, useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'modal.show':
      return { show: true }
    case 'modal.hide':
      return { show: false }
    default:
      return state
  }
}

export const ModalContext = createContext(null)

export function ModalContainer({ children, defaultState }) {
  const [state, dispatch] = useReducer(reducer, {
    show: defaultState,
  })

  return (
    <ModalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContainer
