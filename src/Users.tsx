import { useUsers } from './hooks/useUsers'
import { useCreateUser } from './hooks/useCreateUser'

export function Users() {
  const {
    users,
    isLoading,
    refetch,
    isFetching,
    error: usersError,
  } = useUsers()

  const { mutateAsync, isPending } = useCreateUser()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const elements = event.currentTarget
      .elements as typeof event.currentTarget.elements & {
      name: HTMLInputElement
      email: HTMLInputElement
    }

    try {
      const data = await mutateAsync({
        email: elements.email.value,
        name: elements.name.value,
      })

      console.log(`Redirect to: /users/${data.id}`)
    } catch (error) {
      console.log(error instanceof Error ? error.message : String(error))
    } finally {
      console.log('Finished request')
    }
  }

  return (
    <div className="p-4">
      <div className="mb-10">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <input
            className="outline-none border border-white p-2 rounded-md text-zinc-100"
            placeholder="Name"
            name="name"
          />
          <input
            className="outline-none border border-white p-2 rounded-md text-zinc-100"
            placeholder="Email"
            name="email"
          />

          <button className="bg-blue-400 py-2 text-zinc-950 rounded-md">
            {isPending ? 'Saving...' : 'Register'}
          </button>
        </form>
      </div>

      <button
        type="button"
        className="bg-white text-black px-4 py-2 rounded-lg"
        onClick={() => refetch()}
      >
        List users
      </button>

      {isLoading && <h1>'Loading...'</h1>}
      {!isLoading && isFetching && <h1>'Fetching...'</h1>}
      {usersError && <h1 className="text-red-400">{usersError.toString()}</h1>}

      {users.map((user) => (
        <div key={user.id}>
          <strong className="block">{user.name}</strong>
          <small>{user.email}</small>
        </div>
      ))}
    </div>
  )
}
