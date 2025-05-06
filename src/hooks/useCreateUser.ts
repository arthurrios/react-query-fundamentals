import { useMutation, useQueryClient } from '@tanstack/react-query'
import { sleep } from '../sleep'
import type { IUser } from '../types'

export function useCreateUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({
      name,
      email,
    }: { name: string; email: string }): Promise<IUser> => {
      await sleep()

      // throw new Error('error')

      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      })

      return response.json()
    },
    onError: (error, variables) => {
      console.log(`Request failed: ${error}`)
      console.log('Failed variables:', variables)
    },
    onSuccess: (data, variables) => {
      console.log(`Request succeeded: ${data}`)
      console.log('Failed variables:', variables)
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
    onSettled: (data, error) => {
      if (data) {
        console.log(`Request settled: ${data}`)
      }
      if (error) {
        console.log(`Request settled with error: ${error}`)
      }
    },
  })
}
