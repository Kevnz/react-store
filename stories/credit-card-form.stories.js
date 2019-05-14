import React from 'react'

import { storiesOf } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import CreditCardForm from '../src/ui/components/creditcard-form'

storiesOf('CreditCardForm', module).add('base', () => (
  <CreditCardForm onSubmit={action('submit')} onCancel={action('cancel')} />
))
