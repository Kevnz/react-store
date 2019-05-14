import React, { forwardRef } from 'react'
import { Form, Row, useFormElement } from 'react-form-elements'
import Button from '../button'
import styles from './creditcard-form.css'

const Inputed = forwardRef(({ name, className, ...otherProps }, ref) => {
  const { id, value, handleChange, inputRef } = useFormElement('', ref)
  return (
    <input
      id={id}
      ref={inputRef}
      name={name}
      onChange={handleChange}
      value={value}
      type="text"
      className={className}
      {...otherProps}
    />
  )
})
Inputed.displayName = 'Inputed'

function CreditCardForm({ totalCost, onSubmit, onCancel }) {
  return (
    <div className={styles.checkout}>
      <Form name="ccform" onSubmit={onSubmit}>
        <div className="checkout-header">
          <h4 className="checkout-title">
            Checkout
            <span className="checkout-price">${totalCost}</span>
          </h4>
        </div>
        <Row>
          <Inputed
            name="nameOnCard"
            className={styles.name}
            placeholder="Your name"
            autoFocus
            required
          />
          <Inputed name="mm" className={styles.exp} placeholder="MM" required />
          <Inputed name="yy" className={styles.exp} placeholder="YY" required />
        </Row>
        <br />
        <Row>
          <Inputed
            name="card"
            className={styles.card}
            placeholder="4111 1111 1111 1111"
            required
          />
          <Inputed
            name="cvc"
            className={styles.cvc}
            placeholder="CVC"
            required
          />
        </Row>
        <p>
          <Button type="primary">Purchase</Button>
          <Button onClick={onCancel}>Cancel</Button>
        </p>
      </Form>
    </div>
  )
}

CreditCardForm.propTypes = {}

export default CreditCardForm
