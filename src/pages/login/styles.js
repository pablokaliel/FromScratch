import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
`;
export const Btn = styled.button`
  height: 36px;
  border-radius: 4px;
  background-color: #3366ff;
  color: #fff;
  font-size: 18px;
  border-image: linear-gradient(to right, #0003b9 33%, rgb(201, 198, 198)) 1;
`;

