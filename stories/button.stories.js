import React from 'react'

import { storiesOf } from '@storybook/react'

import { linkTo } from '@storybook/addon-links'

import { action } from '@storybook/addon-actions'
import Button from '../src/ui/components/button'

storiesOf('Button', module)
  .add('The Button', () => <Button>Click Me</Button>)
  .add('The Primary Button', () => (
    <Button variation="primary">Click Me</Button>
  ))
  .add('with onClick', () => (
    <Button onClick={action('button-click')}>Click</Button>
  ))
  .add('with className', () => <Button className="myButton">Click</Button>)
