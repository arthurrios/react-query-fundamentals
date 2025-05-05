import { useQuery } from '@tanstack/react-query'
import type { IUser } from './types'
import { sleep } from './sleep'

export function Users() {
  const { data, isLoading, refetch, isFetching } = useQuery({
    enabled: false,
    queryKey: ['users'],
    queryFn: async (): Promise<IUser[]> => {
      await sleep()
      const response = await fetch('http://localhost:3000/users')
      return response.json()
    },
  })
  return (
    <div>
      <button
        type="button"
        className="bg-white text-black px-4 py-2 rounded-lg"
        onClick={() => refetch()}
      >
        List users
      </button>

      {isLoading && <h1>'Loading...'</h1>}
      {!isLoading && isFetching && <h1>'Fetching...'</h1>}
      {data?.map((user) => (
        <div key={user.id}>
          <strong className="block">{user.name}</strong>
          <small>{user.email}</small>
        </div>
      ))}
    </div>
  )
}
