import React from 'react'
import 'jest-dom/extend-expect'
import { render, fireEvent } from 'react-testing-library'
import Button from '../button'
describe('The Button component', () => {
  it('should render a button', async () => {
    const { container, getByText } = render(<Button>Click Me</Button>)
    expect(container).toMatchSnapshot()
    expect(container.firstChild).toHaveTextContent('Click Me')
    const btn = getByText('Click Me')
    expect(btn).toMatchSnapshot()
  })

  it('should fire `onClick` when clicked', async () => {
    const mockCallback = jest.fn()
    const { container } = render(
      <Button onClick={mockCallback}>Click Me</Button>
    )
    const btn = container.firstChild
    fireEvent.click(btn)
    expect(mockCallback).toBeCalled()
  })

  it('should render a default button', async () => {
    const { container } = render(<Button>Click Me</Button>)

    expect(container.firstChild).toHaveClass('default')
  })

  it('should render a primary button', async () => {
    const { container } = render(<Button variation="primary">Click Me</Button>)
    expect(container.firstChild).toHaveClass('primary')
  })
})
