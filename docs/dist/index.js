import * as __SNOWPACK_ENV__ from '../_snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React from '../_snowpack/pkg/react.js';
import ReactDOM from '../_snowpack/pkg/react-dom.js';
import { QueryClientProvider } from '../_snowpack/pkg/react-query.js';
import App from './containers/App.js';
import { isDevelopment } from './util/index.js';
import queryClient from './client.js';
import '../_snowpack/pkg/antd/dist/antd.min.css.proxy.js';
import './index.css.proxy.js';
ReactDOM.render(
  /* @__PURE__ */ React.createElement(
    React.StrictMode,
    null,
    /* @__PURE__ */ React.createElement(
      QueryClientProvider,
      {
        client: queryClient,
      },
      /* @__PURE__ */ React.createElement(App, null),
    ),
  ),
  document.getElementById('root'),
);
if (isDevelopment() && undefined /* [snowpack] import.meta.hot */) {
  undefined /* [snowpack] import.meta.hot */
    .accept();
}
