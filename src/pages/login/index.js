import { useState } from "react";
import Logo from "../../components/Logo";
import { auth } from "../../services/firebaseConnection";
import "./styles.css"
import {signInWithEmailAndPassword} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'

import {toast} from 'react-toastify'

function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if(email === "" ||  password === ""){
      alert("Preencha todos os campos.");
      return;
    }
    
    signInWithEmailAndPassword(auth,email,password)
    .then(() =>{
      toast.success("Bem vindo!")
      navigate("/admin",{replace:true});
    })
    .catch(()=>{
      toast.error("Erro ao tentar fazer login!")
      console.log("error");
    })
  }
  

  return ( 
    <div className="login-container">
      <Logo/>
      <form className="form" onSubmit={handleLogin}>
        <input 
        type="email"
        placeholder="Informe seu email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <input 
        type="password"
        placeholder="Informe sua senha..."
        autoComplete="on"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Acessar</button>
      </form>
    </div>
   );
}

export default Login;