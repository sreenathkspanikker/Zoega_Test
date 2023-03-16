import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My Blog', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Blog/i);
  expect(linkElement).toBeInTheDocument();
});
