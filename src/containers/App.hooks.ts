import { useQuery } from 'react-query';
import { Aggregates, API, Dimensions, Token } from '../config';
import { createQuery, formatDate } from '../util';

export const useAPIData = ({ start, end }: { start: Date; end: Date }) => {
  const startDate = formatDate(start);
  const endDate = formatDate(end);

  return useQuery([startDate, endDate], () =>
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
    ).then(r => r.json()),
  );
};
