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

export const getUsersById = (id: number): User | undefined => {
  return users.find(user => user.id == id)
}

export const createUser = (name: string): User => {
  const newUser = { id: users.length + 1, name }
  users.push(newUser)
  return newUser
}
