import React, { forwardRef, useRef, useImperativeHandle } from 'react'

import { storiesOf } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Modal, { ModalContext } from '../src/ui/components/modal'
import Button from '../src/ui/components/button'
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
        <Button
          onClick={() => {
            console.log('close it please')
            modalRef.current.hide()
          }}
        >
          Hide Me Please
        </Button>
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
