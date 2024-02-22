import { useContext } from 'react'

import { UserContext } from '../context/UserContext'

export const UserContextConsumer = () => {
  const {user, setUser} =  useContext(UserContext)

  return (
    <div>
      <p>Usuário: {user}</p>
    </div>
  )
}
