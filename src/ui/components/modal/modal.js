import React, {
  useContext,
  forwardRef,
  useRef,
  useState,
  useImperativeHandle,
} from 'react'
import { CSSTransition } from 'react-transition-group'
import { ModalContainer, ModalContext } from './context'
import styles from './modal.css'

export const Header = ({ children }) => {
  return (
    <div className={styles.header}>
      <div>{children}</div>
    </div>
  )
}
export const Footer = ({ children }) => {
  return (
    <div className={styles.footer}>
      <div className="footer">default footer</div>
    </div>
  )
}

export const InnerModal = forwardRef(
  ({ children, buttonClass, buttonText }, ref) => {
    const { show, dispatch } = useContext(ModalContext)

    useImperativeHandle(ref, () => ({
      hide() {
        dispatch({
          type: 'modal.hide',
        })
      },
    }))
    return (
      <div>
        <button
          className={buttonClass}
          onClick={e => {
            dispatch({
              type: 'modal.show',
            })
          }}
        >
          {buttonText}
        </button>
        <CSSTransition in={show} timeout={300} classNames="modal" unmountOnExit>
          <div className={styles.mask}>
            <div className={styles.wrapper}>
              <div className="modal-container">
                <div className={styles.body}>
                  <div className="body">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>
    )
  }
)
const Modal = forwardRef(({ children, show, ...props }, ref) => {
  const modalRef = useRef()

  useImperativeHandle(ref, () => ({
    hide() {
      modalRef.current.hide()
    },
  }))
  return (
    <ModalContainer defaultState={show}>
      <InnerModal {...props} ref={modalRef}>
        {children}
      </InnerModal>
    </ModalContainer>
  )
})
export default Modal
