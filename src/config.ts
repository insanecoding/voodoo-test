export const API = 'http://mock-api.voodoo.io';

// keeping it here but it should live in .env file locally and be injected by vault on the ci
export const Token =
  'Bearer mwNNiwFuJ30GqpuYwQHSW0XQx93E2rIS7NRSfxwLz4XI5Yoo5aSP8wvyibhVO8aYeaVLYsCJcFP9V0uzo95ph66qktQwE';

export const Dimensions = [
  'date',
  'country',
  'format',
  'os',
  'game',
  'placement',
];

export const Aggregates = ['views', 'conversions', 'revenue'];
