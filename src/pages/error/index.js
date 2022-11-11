import { Link } from "react-router-dom";
import Logo from "../../components/logotwo";
import "./styles.css";

function Error() {
  return (
    <div className="error">
      <Logo
      nameone="dev"
      nametwo="link"
      />

      <h1>Página não encontrada!</h1>
      <p>Está página que está procurando não existe</p>

      <Link className="link" to="/">
        Voltar Para Home
      </Link>
    </div>
  );
}

export default Error;
