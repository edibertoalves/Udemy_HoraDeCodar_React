import React from 'react'

const ShowUserName = (props) => {
  return (
    <div>
        <h1>props</h1>
        <h2>O nome do usuário é: {props.name} </h2>
    </div>
  )
}

export default ShowUserName