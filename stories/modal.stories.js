import React from 'react'

import { storiesOf } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Modal from '../src/ui/components/modal'

storiesOf('Modal', module).add('with one product', () => (
  <Modal showModal={true} />
))
