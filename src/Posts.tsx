import { useQueryClient } from '@tanstack/react-query'
import type { IUser } from './types'
import { sleep } from './sleep'
import { Link } from 'react-router-dom'

export function Posts() {
  const queryClient = useQueryClient()

  function handleMouseEnter() {
    queryClient.prefetchQuery({
      queryKey: ['users'],
      queryFn: async (): Promise<IUser[]> => {
        // throw new Error('Error')
        await sleep()
        const response = await fetch('http://localhost:3000/users')
        return response.json()
      },
    })
  }

  return (
    <pre>
      Posts
      <br />
      <Link to="/" onMouseEnter={handleMouseEnter}>
        Go to users
      </Link>
    </pre>
  )
}
