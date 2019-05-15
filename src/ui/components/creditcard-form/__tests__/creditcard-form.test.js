import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import CreditCardForm from '../creditcard-form'
describe('The Credit Card Form', () => {
  it('should render', () => {
    const mockCB = jest.fn()
    const { container } = render(<CreditCardForm onSubmit={mockCB} />)
    expect(container).toMatchSnapshot()
  })
  it('should handle a cancel', () => {
    const mockCB = jest.fn()
    const { container } = render(
      <CreditCardForm onSubmit={() => {}} onCancel={mockCB} />
    )
    const btn = container.querySelector('button.primary')
    const cancelBtn = container.querySelector('button.default')
    expect(btn).toMatchSnapshot()
    expect(cancelBtn).toMatchSnapshot()
    fireEvent.click(cancelBtn)
    expect(mockCB).toHaveBeenCalled()
  })
})
