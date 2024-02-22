// importa o contexto
import { createContext, useState } from "react"

export const UserContext = createContext() // cria o contexto

export const UserContextProvider = ({children}) => { // cria o provider
  const [user, setUser] = useState('Ediberto')

  // const handleUser = () => {
  //   setUser(user = 'Ediberto')
  // }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

