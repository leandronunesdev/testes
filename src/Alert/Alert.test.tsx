import { render, screen } from '@testing-library/react'
import Alert from './index'

test('renders alert capivara', () => {
  render(<Alert />);
  const alertElement = screen.getByTestId("myAlert");
  expect(alertElement).toHaveTextContent("você deve aceitar os termos")
})