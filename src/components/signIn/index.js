import "./styles.css"
import {AiOutlineGoogle} from "react-icons/ai";

function SignIn() {

  return ( 
    <div className="container">
      <h1>Acesse sua conta pelo Google</h1>

      <span>Utilizando autenticação social, por exemplo, autenticação com a Google você<br/>
      facilita a vida do usuário permitindo utilizar sua aplicação sem fazer cadastro.
      </span>

      <button type="button" className="button"> <AiOutlineGoogle style={{marginRight:8}}/> entrar com Google</button>
    </div>
   );
}

export default SignIn;