import "./styles.css";
import { AiOutlineGoogle } from "react-icons/ai";

import { Container, Title, Text, Btn } from "./styles";

function SignIn() {
  return (
    <Container className="container">
      <Title>Acesse sua conta pelo Google</Title>

      <Text>
        Utilizando autenticação social, por exemplo, autenticação com a Google
        você
        <br />
        facilita a vida do usuário permitindo utilizar sua aplicação sem fazer
        cadastro.
      </Text>

      <Btn type="button" className="button">
        {" "}
        <AiOutlineGoogle style={{ marginRight: 8 }} /> entrar com Google
      </Btn>
    </Container>
  );
}

export default SignIn;
