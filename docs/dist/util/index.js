import * as __SNOWPACK_ENV__ from '../../_snowpack/env.js';

import { format } from '../../_snowpack/pkg/date-fns.js';
const dateFormat = 'yyyy-MM-dd';
export const formatDate = date => format(date, dateFormat);
export const isDevelopment = () => __SNOWPACK_ENV__.MODE === 'development';
export const createQuery = data =>
  Object.keys(data)
    .map(key => {
      const value = data[key];
      const valueStr = Array.isArray(value) ? value.join(',') : value;
      return `${encodeURIComponent(key)}=${encodeURIComponent(valueStr)}`;
    })
    .join('&');
export const roundNumber = (input, decimalPlaces = 2) => {
  if (!input) return null;
  return Number(
    `${Math.round(Number(`${input}e${decimalPlaces}`))}e-${decimalPlaces}`,
  );
};
