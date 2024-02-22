import React from 'react'

// importa o contexto e o consumer
import { UserContextConsumer } from '../components/UserContextConsumer'



const Home = () => {
  return (
    <div>
      <UserContextConsumer />
    </div>
  )
}

export default Home