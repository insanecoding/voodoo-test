import { useQuery } from 'react-query';
import { Aggregates, API, Dimensions, Token } from '../../../config';
import { createQuery, formatDate } from '../../../util';
import { transform } from './transform';

export const useMonetizationApi = ({
  start,
  end,
  enabled,
  onSuccess,
}: {
  start: Date;
  end: Date;
  enabled: boolean;
  onSuccess: () => void;
}) => {
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
