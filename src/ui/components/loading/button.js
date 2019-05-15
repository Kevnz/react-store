import React from 'react'
import { Button } from '../button'
import Indicator from './indicator'

export default function LoadingButton({
  loading,
  onClick,
  variation = 'primary',
  children,
}) {
  const content = loading ? <Indicator size="extra-small" /> : children
  return (
    <div>
      <Button disabled={loading} onClick={onClick} variation={variation}>
        {content}
      </Button>
    </div>
  )
}
