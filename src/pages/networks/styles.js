import styled from "styled-components";

export const AdminContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 6px 30px;
`;
export const TitleSocial = styled.h1`
  color: #fff;
  margin-top: 34px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Button = styled.button`
  height: 36px;
  border-radius: 4px;
  background-color: #3366ff;
  color: #fff;
  font-size: 18px;
  border-image: linear-gradient(to right, #0003b9 33%, rgb(201, 198, 198)) 1;
`;
export const Label = styled.label`
  color: #fff;
  font-weight: medium;
  margin-top: 8px;
  margin-bottom: 14px;
`;
