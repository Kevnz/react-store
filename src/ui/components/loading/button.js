import React from 'react'
import { Button } from 'react-form-elements'
import Loading from './indicator'

export default function button({ loading, onClick, children }) {
  const content = loading ? <Loading size="extra-small" /> : children
  return (
    <div>
      <Button disabled={loading} onClick={onClick}>
        {content}
      </Button>
    </div>
  )
}
