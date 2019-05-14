import React, { useState } from 'react'

import { storiesOf } from '@storybook/react'

import { action } from '@storybook/addon-actions'

import LoadingButton from '../src/ui/components/loading/button'

const LoadingBounce = () => {
  const [loading, setLoading] = useState(false)

  return (
    <LoadingButton
      loading={loading}
      onClick={() => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
        }, 3000)
      }}
    >
      Click Me
    </LoadingButton>
  )
}

storiesOf('LoadingButton', module)
  .add('when loading is false', () => (
    <LoadingButton loading={false}>Click Me</LoadingButton>
  ))
  .add('when loading is true', () => (
    <LoadingButton loading={true}>Click Me</LoadingButton>
  ))
  .add('onClick', () => <LoadingBounce />)
