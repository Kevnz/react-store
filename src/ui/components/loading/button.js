import React from 'react'
import { Button } from '../button'
import Loading from './indicator'

export default function LoadingButton({
  loading,
  onClick,
  variation = 'primary',
  children,
}) {
  const content = loading ? <Loading size="extra-small" /> : children
  return (
    <div>
      <Button disabled={loading} onClick={onClick} variation={variation}>
        {content}
      </Button>
    </div>
  )
}
