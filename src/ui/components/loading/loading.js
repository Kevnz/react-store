import React from 'react'
import styles from './loading.css'
export default function Loading() {
  return (
    <div className="spaced">
      <p>Loading</p>
      <span className={styles.loader} />
    </div>
  )
}
