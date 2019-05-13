import React from 'react'

import { storiesOf } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import ProductCard from '../src/ui/components/product-card'

const products = require('./data/products.json')

const product = products[0]
storiesOf('ProductCard', module)
  .add('with one product', () => (
    <ProductCard {...product} addToCart={action('add-to-cart')} />
  ))
  .add('with another product', () => (
    <ProductCard {...products[2]} addToCart={action('add-to-cart')} />
  ))
  .add('in a small container', () => (
    <div style={{ width: 220, height: 200 }}>
      <ProductCard {...product} addToCart={action('add-to-cart')} />
    </div>
  ))
