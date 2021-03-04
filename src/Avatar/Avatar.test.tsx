import { render, screen } from '@testing-library/react'
import Avatar from './index'

test('renders avatar capivara', () => {
  render(<Avatar />);
  const avatarElement = screen.getByTestId("myAvatar");
  expect(avatarElement).toHaveProperty("src")
})