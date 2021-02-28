import React from 'react';
import { roundNumber } from '../../util';

const Results = (data: any) => {
  if (!data || !data.applications) return null;

  return <div>{roundNumber(data.totalRevenue)}</div>;
};

export default Results;
