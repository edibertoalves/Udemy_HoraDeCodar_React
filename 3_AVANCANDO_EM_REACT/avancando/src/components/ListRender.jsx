import { useState } from "react";

const ListRender = () => {
  const [List] = useState(["Ediberto", "Ferreira", "Alves"]);

  const [users, setUsers]   = useState([
    {id: 1, name: "Ediberto", age: 45},
    {id: 2, name: "Ciclano", age: 35},
    {id: 3, name: "Fulano", age: 28}
  ])

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) =>{
      console.log(prevUsers);
      return prevUsers.filter((user) => randomNumber !== user.id
      )
    });
  };

  return (
    <div>
      <ul>
        {List.map((item, i) => (
          <li key= { i }>{item}</li>
        ))}
      </ul>
      
      {/* uso da propriedade "key": implementação de chave única para cada objeto que é retornado */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
