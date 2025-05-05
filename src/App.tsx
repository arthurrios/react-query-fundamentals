import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Users } from './Users'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Posts } from './Posts'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Users</Link>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools buttonPosition="bottom-left" />
    </QueryClientProvider>
  )
}
