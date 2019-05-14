import React from 'react'
import { Button } from 'react-form-elements'
import classnames from 'classnames'
import styles from './button.css'
export default function PrimaryButton({
  className,
  variation = 'default',
  ...props
}) {
  return (
    <Button {...props} className={classnames(styles[variation], className)} />
  )
}
