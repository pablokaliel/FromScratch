import styled from "styled-components";

export const AdminHeader = styled.header`
  width: 100%;
  max-width: 720px;
  margin-top: 20px;

  padding: 0 14px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: 720px;
    margin-top: 55px;

    padding: 0 14px;
  }
`;
export const NavHeader = styled.nav`
  width: 100%;
  background-color: #fff;
  height: 48px;
  display: flex;
  align-items: center;
  border-radius: 4px;

  button {
    border: 0;
    background-color: transparent;
    margin-right: 24px;
    margin-left: 8px;
  }
  a {
    margin-right: 14px;
    color: #21242d;
    transition: all 0.3s ease-in-out;

    a:hover {
      color: #eda617;
    }
  }
`;
export const Button = styled.button`
  border: 0;
  background-color: transparent;
  margin-right: 24px;
  margin-left: 8px;
`;
