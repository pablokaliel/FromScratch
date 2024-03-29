import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

body{
  font-family: "Noto Sans",sans-serif;
  min-height: 100vh;
   background: ${(props) => props.theme.colors.background};

}

button{
  cursor: pointer;
}

a{
  text-decoration: none;
}
`;
