import React from 'react'

const Mensagem = ({children, customValue}) => {
  return (
    <div>
        <h3>Children</h3>
        {children}
        <h4>{customValue}</h4>
    </div>
  )
}

export default Mensagem