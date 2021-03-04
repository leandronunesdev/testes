import { render, screen } from '@testing-library/react'
import List from './index'

test('renders list', () => {
  render(<List />);
  const listElement = screen.getByTestId("myList");
  expect(listElement).toContainHTML("li")
})