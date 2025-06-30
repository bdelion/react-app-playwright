import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

test('button calls onClick when clicked', () => {
  const mockClick = jest.fn();
  const { getByTestId } = render(<Button label="Test" onClick={mockClick} />);
  fireEvent.click(getByTestId('custom-button'));
  expect(mockClick).toHaveBeenCalledTimes(1);
});
