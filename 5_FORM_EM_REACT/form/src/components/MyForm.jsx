import "./MyForm.css";
import { useState } from "react";

const MyForm = ({ user} ) => {
  // 6 - controlled input
  // 3  - gerenciamento de dados
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');

  const [bio, setBio] = useState(user ? user.bio : '');
  const [role, setRole] = useState(user ? user.role : '');

  const handleName = (event) => {
    setName(event.target.value);
  };

  // console.log(name);
  // console.log(email);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("enviando formulário");
    console.log(name, email, bio, role);

    // 7 - limpar os campos
    setName('');
    setEmail('');
  };


  return (
    <div>
      {/* 1 - criacao de formulario */}
      {/* 5 - envio de formularios */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Digite seu nome"
            onChange={handleName}
          />
        </div>
        {/* 2 - label envovendo input */}
        <label>
          <span>Email</span>
          {/* 4 - simplificação de manipulação de estado */}
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {/* 8 - textarea */}
        <label>
          <span>Mensagem</span>
          <textarea name="message" placeholder="Digite sua mensagem" onChange={(e) => setBio(e.target.value)} value={ bio }/>
        </label>
        {/* // 9 - select */}
        <label>
          <span>Função no sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)} value={ role } placeholder="Selecione">
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
