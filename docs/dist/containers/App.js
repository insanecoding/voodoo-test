import React, { useState } from '../../_snowpack/pkg/react.js';
import {
  isAfter,
  startOfToday,
  startOfYesterday,
} from '../../_snowpack/pkg/date-fns.js';
import Spin from '../../_snowpack/pkg/antd/es/spin.js';
import Button from '../../_snowpack/pkg/antd/es/button.js';
import Alert from '../../_snowpack/pkg/antd/es/alert.js';
import RangePicker from '../components/range-picker/index.js';
import { useMonetizationApi } from '../services/api/monetization/index.js';
import { formatDate } from '../util/index.js';
import Results from '../components/results/index.js';
import classes from './App.module.css.proxy.js';
import logo from './logo.svg.proxy.js';
const disableDate = current => isAfter(current, new Date());
const App = () => {
  const [enabled, setEnabled] = useState(true);
  const [start, setStart] = useState(startOfYesterday());
  const [end, setEnd] = useState(startOfToday());
  const { data, isLoading, error } = useMonetizationApi({
    start,
    end,
    enabled,
    onSuccess: () => setEnabled(false),
  });
  const handleDateChange = dates => {
    const [startDate, endDate] = dates || [];
    if (!startDate || !endDate) return;
    if (formatDate(start) !== formatDate(startDate)) {
      setStart(startDate);
    }
    if (formatDate(end) !== formatDate(endDate)) {
      setEnd(endDate);
    }
  };
  const doFetch = e => {
    e.preventDefault();
    setEnabled(true);
  };
  return /* @__PURE__ */ React.createElement(
    React.Fragment,
    null,
    /* @__PURE__ */ React.createElement(
      'header',
      {
        className: classes.header,
      },
      /* @__PURE__ */ React.createElement(
        'a',
        {
          href: 'https://www.voodoo.io/',
        },
        /* @__PURE__ */ React.createElement('img', {
          alt: 'voodoo logo',
          src: logo,
          height: 20,
          width: 99,
        }),
      ),
    ),
    /* @__PURE__ */ React.createElement(
      'main',
      {
        className: classes.main,
      },
      /* @__PURE__ */ React.createElement('h1', null, 'Revenue dashboard'),
      /* @__PURE__ */ React.createElement(
        'label',
        null,
        'Date interval',
        /* @__PURE__ */ React.createElement(
          'div',
          {
            className: classes.rangePicker,
          },
          /* @__PURE__ */ React.createElement(RangePicker, {
            disabled: isLoading,
            disabledDate: disableDate,
            value: [start, end],
            size: 'large',
            allowClear: false,
            separator: '\u2014',
            onChange: handleDateChange,
          }),
        ),
      ),
      /* @__PURE__ */ React.createElement(
        Button,
        {
          type: 'primary',
          size: 'large',
          disabled: isLoading,
          onClick: doFetch,
        },
        'Show',
      ),
      isLoading &&
        /* @__PURE__ */ React.createElement(Spin, {
          size: 'large',
          className: classes.spinner,
        }),
      error &&
        /* @__PURE__ */ React.createElement(Alert, {
          message: 'Error',
          description: "Couldn't fetch data",
          type: 'error',
          showIcon: true,
        }),
      !isLoading &&
        !error &&
        /* @__PURE__ */ React.createElement(Results, {
          ...data,
        }),
    ),
    /* @__PURE__ */ React.createElement(
      'footer',
      {
        className: classes.footer,
      },
      '\xA92021 Created by Dmitrii Novozhilov for Voodoo',
    ),
  );
};
export default App;
