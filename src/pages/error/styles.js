import styled from "styled-components";

import { Link } from "react-router-dom";

export const ContainerError = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  color: #fff;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h1`
  margin-bottom: 6px;
`;
export const Text = styled.span`
  font-style: italic;
`;
export const LinkRef = styled(Link)`
  background-color: rgba(255, 255, 255, 0.6);
  padding: 4px 16px;
  margin-top: 14px;
  border-radius: 4px;
  color: #000;
  transition: all 0.5s;
  :hover {
    background-color: #fff;
    transform: scale(1.05);
  }
`;
export const LinkRefTwo = styled(Link)`
  padding: 4px 16px;
  margin-top: 14px;
  border-radius: 4px;
  color: #000;
  transition: all 0.5s;
`;
