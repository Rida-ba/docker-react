import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders visit my repositorie', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/visit my repositorie/i);
  expect(linkElement).toBeInTheDocument();
});
