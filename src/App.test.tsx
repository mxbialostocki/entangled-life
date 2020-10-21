import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders welcome text element', () => {
  const { getByText } = render(<App />);
  const welcomeElement = getByText(/Hello, world/i);
  expect(welcomeElement).toBeInTheDocument();
});
