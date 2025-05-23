interface User {
  id: number;
  name: string;
}

let users: User[] = [
  { id: 1, name: 'Udin' },
  { id: 2, name: 'Budi' },
]

export const getUsers = (): User[] => {
  return users
}

export const createUser = (name: string): User => {
  const newUser = { id: users.length + 1, name }
  users.push(newUser)
  return newUser
}
