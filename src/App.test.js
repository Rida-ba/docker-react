import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders visit accenture', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/visit Accenture/i);
  expect(linkElement).toBeInTheDocument();
});
