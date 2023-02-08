import ReactSwitch from "react-switch";
import { Container, DivGit, ViewGit, DivTitle, Title, GitHub } from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { useContext } from "react";

function TrocaTheme({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <DivGit>
        <ViewGit href="#">
          <GitHub /> View on GitHub
        </ViewGit>
      </DivGit>
      <DivTitle>
        <Title>Portifolio</Title>
      </DivTitle>
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        height={10}
        width={30}
        checkedIcon={false}
        uncheckedIcon={false}
        handleDiameter={20}
        offColor="#6c757d"
        onColor="#fff"
        offHandleColor="#fff"
        onHandleColor="#6c757d"
      />
    </Container>
  );
}

export default TrocaTheme;
