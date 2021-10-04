import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from './Modal';

test('renders component and shows when set to show, with passed data', () => {
  render(<Modal show={true} data={{id: 0, title: "test124", original_title: "test124"}}/>);
  const headerTitle = screen.getByText(/test124/);
  expect(headerTitle).toBeInTheDocument();
});

test('does not render component when set to not show', () => {
  render(<Modal show={false} data={{id: 0, title: "test124", original_title: "test124"}}/>);
  const headerTitle = screen.getByTestId("modal") || false;
  expect(headerTitle).toBeFalsy;
});
