import React from 'react';

const Button = ({ label, onClick }) => (
  <button data-testid="custom-button" onClick={onClick}>
    {label}
  </button>
);

export default Button;
