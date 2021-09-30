import React, { useState } from "react";
import "./styles.css";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const onLogin = async () => {
    if(!username || !password ) {
      alert("Preencha todos os dados")
      return
    }

    const res = await axios.get(`/username=${username}&password=${password}`)
    //console.log(res.data)
    if (!res.data) 
      alert("Registre o novo usuário.")
    else
      onSubmit()
  }

  const onSubmit = () => {
    if(!username || !password ) {
      alert("Preencha todos os dados")
      return
    }

    postUser()
  }

  const postUser = async () => {
      // POST <host>/usuario
      const userinfo = {
        "username": username,
        "password": password
      }

      const res = await axios.post(``, userinfo);
      console.log(res.data)
}


  return (
    <div className="form">
        <h1>ACESSO AO SISTEMA</h1>
        <label>Usuário:</label>
        <div>
          <input onChange={e => setUsername(e.target.value)} label="Usuário"/>
        </div>
        <label>Senha:</label>
        <div>
          <input onChange={e => setPassword(e.target.value)} label="Senha" />
        </div>
        <div className="buttons">
          <button onClick={() => onLogin()}>ENTRAR</button>
          <button onClick={() => onSubmit()}>NOVO USUÁRIO</button>
        </div>
    </div>
  );
}
export default Login;
