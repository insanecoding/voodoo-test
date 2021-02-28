import { QueryClient } from '../_snowpack/pkg/react-query.js';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});
export default queryClient;
