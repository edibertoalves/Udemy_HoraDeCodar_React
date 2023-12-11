import React from 'react'

const UserDetails = ({key, nome, idade, profissao}) => {

    return (
      <div>
          <h2>Detalhes de {nome}</h2>
          {/* <li>id: {key}</li> */}
          <p>nome: {nome}</p>
          <p>idade: {idade}</p>
          <p>profissao: {profissao}</p>
          {idade >= 18 ? <p>Habilitado para dirigir</p> : <p>Não habilitado (menor de idade)</p> }
      </div>
    )

}

export default UserDetails