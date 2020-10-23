import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Renders the home page', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/The client part will render here/i);
  expect(linkElement).toBeInTheDocument();
});
