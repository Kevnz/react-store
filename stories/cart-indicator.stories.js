import React from 'react'

import { storiesOf } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import CartIndicator from '../src/ui/components/cart-indicator'
import { CartContext } from '../src/ui/core/container'

storiesOf('Cart Indicator', module)
  .add('with five items', () => (
    <CartContext.Provider value={{ totalItems: 5 }}>
      <CartIndicator />
    </CartContext.Provider>
  ))
  .add('with zero items', () => (
    <CartContext.Provider value={{ totalItems: 0 }}>
      <CartIndicator />
    </CartContext.Provider>
  ))
  .add('with ten items', () => (
    <CartContext.Provider value={{ totalItems: 10 }}>
      <CartIndicator />
    </CartContext.Provider>
  ))
