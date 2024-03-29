import { useState } from "react";
import Logo from "../../components/logotwo";
import { auth } from "../../services/firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { LoginContainer, Form, Btn } from "./styles";

import { toast } from "react-toastify";
import Input from "../../components/input";
import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Fill in all fields.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Login successfully done!");
        navigate("/admin", { replace: true });
      })
      .catch(() => {
        toast.error("Error trying to login!");
        console.log("error");
      });
  }

  return (
    <LoginContainer className="login-container">
      <Link to="/">
        <Logo nameone="" nametwo="Login" />
      </Link>

      <Form className="form" onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder={t("login")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder={t("password")}
          autoComplete="on"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Btn type="submit">{t("access")}</Btn>
      </Form>
    </LoginContainer>
  );
}

export default Login;
