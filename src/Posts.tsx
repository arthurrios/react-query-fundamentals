import { useQuery } from '@tanstack/react-query'
import type { IUser } from './types'
import { sleep } from './sleep'

export function Posts() {
  // const { data } = useQuery({
  //   enabled: false,
  //   queryKey: ['users'],
  //   staleTime: 5000,
  //   queryFn: async (): Promise<IUser[]> => {
  //     await sleep()
  //     const response = await fetch('http://localhost:3000/users')
  //     return response.json()
  //   },
  // })
  return <pre>{JSON.stringify({}, null, 2)}</pre>
}
