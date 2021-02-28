import * as React from 'react';
import { QueryClientProvider } from 'react-query';
import { render } from '@testing-library/react';
import App from './App';
import queryClient from '../client';

describe('Basic smoke test', () => {
  it('renders without crash', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );
  });
});
