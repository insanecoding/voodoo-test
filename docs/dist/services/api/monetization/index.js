import { useQuery } from '../../../../_snowpack/pkg/react-query.js';
import { Aggregates, API, Dimensions, Token } from '../../../config.js';
import { createQuery, formatDate } from '../../../util/index.js';
import { transform } from './transform.js';
export const useMonetizationApi = ({ start, end, enabled, onSuccess }) => {
  const startDate = formatDate(start);
  const endDate = formatDate(end);
  return useQuery(
    [startDate, endDate],
    () =>
      fetch(
        `${API}/monetization?${createQuery({
          start: startDate,
          end: endDate,
          dimensions: Dimensions,
          aggregates: Aggregates,
        })}`,
        {
          headers: {
            Authorization: Token,
          },
        },
      )
        .then(r => r.json())
        .then(data => transform(data.data)),
    {
      enabled,
      onSuccess,
    },
  );
};
