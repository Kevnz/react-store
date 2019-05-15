import React from 'react'
import { render } from 'react-testing-library'
import CartIndicator from '../cart-indicator'
import { CartContext } from '../../../core/container'

describe('The Cart Indicator', () => {
  it('should show 0 items when cart is empty', () => {
    const { container } = render(
      <CartContext.Provider value={{ totalItems: 0 }}>
        <CartIndicator />
      </CartContext.Provider>
    )
    expect(container).toMatchSnapshot()
    const amount = container.querySelector('.amount')
    expect(amount.innerHTML.trim()).toBe('0')
  })
  it('should show 4 items when cart has 4 total items', () => {
    const { container } = render(
      <CartContext.Provider value={{ totalItems: 4 }}>
        <CartIndicator />
      </CartContext.Provider>
    )
    expect(container).toMatchSnapshot()
    const amount = container.querySelector('.amount')
    expect(amount.innerHTML.trim()).toBe('4')
  })
})
