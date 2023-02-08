import styled from "styled-components";
import { motion } from "framer-motion";

export const SwitchContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  max-width: 600px;
  margin-left: 70%;

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-left: 0;
    padding-right: 20%;
  }
`;
export const Image = styled.img`
  height: 70px;
  margin-left: 15px;
  justify-content: space-between;
  width: 70px;

  :hover {
    opacity: 0.6;
  }
`;
export const Btn = styled.button`
  cursor: pointer;
  margin-left: 75px;
  margin-bottom: 35px;
  background: none;
  border: none;
  height: 4px;
  width: 4px;
`;
export const Text = styled.span`
  color: white;
  font-size: 12px;
  margin-left: 25px;
  color: ${(props) => props.theme.colors.link};
`;
