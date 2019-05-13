import React from 'react'

import { storiesOf } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import ProductLine from '../src/ui/components/product-line'

const products = require('./data/products.json')

const product = products[0]
storiesOf('ProductLine', module)
  .add('with one product', () => (
    <ProductLine
      {...product}
      quantity={3}
      removeFromCart={action('remove-from-cart')}
    />
  ))
  .add('with another product', () => (
    <ProductLine {...products[2]} removeFromCart={action('remove-from-cart')} />
  ))
  .add('in three items', () => (
    <div>
      <ProductLine
        {...product}
        quantity={4}
        removeFromCart={action('remove-from-cart')}
      />
      <ProductLine
        {...products[1]}
        quantity={1}
        removeFromCart={action('remove-from-cart')}
      />
      <ProductLine
        {...products[3]}
        quantity={2}
        removeFromCart={action('remove-from-cart')}
      />
    </div>
  ))
