import { Link } from "react-router-dom";
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
`;

export const LinkBack = styled(Link)`
  button {
    background-color: transparent;
    border: none;
    padding: 5px 10px;
  }
`;
export const LinkSocial = styled(Link)`
  margin-left: 15px;
`;
