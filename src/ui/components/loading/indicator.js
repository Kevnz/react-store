import React from 'react'
import styles from './loading.css'
export default function Indicator({ size }) {
  return <span className={`${styles.loader} ${styles[size || 'default']}`} />
}
