import React from 'react'

import { storiesOf } from '@storybook/react'

import { linkTo } from '@storybook/addon-links'

import Loading from '../src/ui/components/loading'

storiesOf('Loading', module)
  .add('The Loading Indicator', () => <Loading />)
  .add('The Loading Indicator Medium', () => <Loading size="medium" />)
  .add('The Loading Indicator Small', () => <Loading size="small" />)
