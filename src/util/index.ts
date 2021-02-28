export const isDevelopment = (): boolean =>
  import.meta.env.MODE === 'development';
