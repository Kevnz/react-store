import React from 'react'
import classnames from 'classnames'
import styles from './loading.css'
export default function Loading({ size }) {
  return (
    <div className="spaced">
      <p>Loading</p>
      <span className={classnames(styles.loader, styles[size])} />
    </div>
  )
}
