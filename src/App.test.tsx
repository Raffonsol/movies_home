import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders home component', () => {
  render(<App />);
  const homeElement = screen.getByTestId("home");
  expect(homeElement).toBeInTheDocument();
});
