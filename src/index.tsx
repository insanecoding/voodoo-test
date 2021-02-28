import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { isDevelopment } from './util';
import 'antd/dist/antd.min.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement with fast-refresh in dev
if (isDevelopment() && import.meta.hot) {
  import.meta.hot.accept();
}
