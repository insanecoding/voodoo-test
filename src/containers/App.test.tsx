import * as React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Basic smoke test', () => {
  it('renders without crash', () => {
    render(<App />);
  });
});
