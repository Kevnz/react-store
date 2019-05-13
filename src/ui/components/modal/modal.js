import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from './modal.css'

export const Modal = ({ showModal }) => {
  const [showButton, setShowButton] = useState(true)
  const [showMessage, setShowMessage] = useState(false)
  return (
    <div>
      <button
        onClick={e => {
          setShowMessage(true)
        }}
      >
        Show
      </button>
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="modal"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <div className={styles.mask}>
          <div className={styles.wrapper}>
            <div className="modal-container">
              <div className={styles.header}>
                <div className="header">default header</div>
              </div>

              <div className={styles.body}>
                <div className="body">default body</div>
              </div>

              <div className={styles.footer}>
                <div className="footer">
                  default footer
                  <button
                    className="modal-default-button"
                    onClick={e => {
                      setShowButton(false)
                      setShowMessage(false)
                    }}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}

export default Modal
