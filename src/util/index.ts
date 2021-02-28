import { format } from 'date-fns';

const dateFormat = 'yyyy-MM-dd';

export const formatDate = (date: Date): string => format(date, dateFormat);

export const isDevelopment = (): boolean =>
  import.meta.env.MODE === 'development';

export const createQuery = (data: Record<string, string | string[]>): string =>
  Object.keys(data)
    .map(key => {
      const value = data[key];
      const valueStr = Array.isArray(value) ? value.join(',') : value;

      return `${encodeURIComponent(key)}=${encodeURIComponent(valueStr)}`;
    })
    .join('&');
