import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders visit vaudoise assurances', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/visit vaudoise assurances/i);
  expect(linkElement).toBeInTheDocument();
});
