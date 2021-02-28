import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider } from 'react-query';
import App from './containers/App';
import { isDevelopment } from './util';
import queryClient from './client';
import 'antd/dist/antd.min.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement with fast-refresh in dev
if (isDevelopment() && import.meta.hot) {
  import.meta.hot.accept();
}
