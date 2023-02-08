import styled from "styled-components";
import { BsGithub, BsSunFill, BsMoonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 2px solid gray;
  background-image: ${(props) => props.theme.colors.header};
  width: 100%;
  z-index: 2;
`;
export const DivGit = styled.div`
  @media (max-width: 770px) {
    display: none;
  }
`;
export const ViewGit = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.link};
  :hover {
    color: ${(props) => props.theme.colors.icon};
    transition: all 0.3s;
  }
`;
export const DivTitle = styled.div`
  display: flex;
  justify-content: center;
  flex: 2;
  @media (max-width: 770px) {
    justify-content: flex-start;
  }
`;
export const Title = styled.h1`
  color: ${(props) => props.theme.colors.title};
`;
export const DivDesktopOrMobile = styled.div``;
export const Computer = styled(BsSunFill)`
  color: #f00;
  :hover {
    cursor: pointer;
    color: #bd5d38;
    transition: all 0.3s;
  }
  @media (max-width: 770px) {
    display: none;
  }
`;
export const Mobile = styled(BsMoonFill)`
  color: #f00;
  :hover {
    cursor: pointer;
    color: #00b37e;
    transition: all 0.3s;
  }

  @media (max-width: 770px) {
    display: none;
  }
`;

export const GitHub = styled(BsGithub)`
  height: 22px;
  width: 22px;
  margin-right: 5px;
`;
