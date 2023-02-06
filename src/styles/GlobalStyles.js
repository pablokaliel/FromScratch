import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

body{
  font-family: "Noto Sans",sans-serif;
  background: radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);
  min-height: 100vh;
}

button{
  cursor: pointer;
}

a{
  text-decoration: none;
}
`;
