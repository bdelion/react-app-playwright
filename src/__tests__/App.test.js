import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../components/App';

test('renders the App with header', () => {
  const { getByText } = render(<App />);
  expect(getByText(/Hello React 16/i)).toBeInTheDocument();
});
