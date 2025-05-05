import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Users } from './Users'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />
      <ReactQueryDevtools buttonPosition="bottom-left" />
    </QueryClientProvider>
  )
}
