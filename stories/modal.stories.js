import React, { forwardRef, useRef, useImperativeHandle } from 'react'

import { storiesOf } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Modal, { ModalContext } from '../src/ui/components/modal'

const Container = () => {
  const modalRef = useRef()
  return (
    <Modal
      buttonText="Purchase"
      buttonClass="primary-btn"
      show={true}
      ref={modalRef}
    >
      <div>
        <h2>Modal</h2>
        <button onClick={() => modalRef.current.hide()}>Hide</button>
      </div>
    </Modal>
  )
}

storiesOf('Modal', module)
  .add('Default', () => (
    <Modal buttonText="Purchase" buttonClass="primary-btn" show={false}>
      <div>
        <h2>Modal</h2>
      </div>
    </Modal>
  ))
  .add('with show set to true', () => <Container />)
