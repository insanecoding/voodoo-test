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

export const roundNumber = (
  input: number,
  decimalPlaces = 2,
): number | null => {
  if (!input) return null;
  // https://www.jacklmoore.com/notes/rounding-in-javascript/
  return Number(
    `${Math.round(Number(`${input}e${decimalPlaces}`))}e-${decimalPlaces}`,
  );
};
