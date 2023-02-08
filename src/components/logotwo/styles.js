import { motion } from "framer-motion";
import styled from "styled-components";

export const LogoTwo = styled(motion.div)`
  margin-bottom: 20px;
`;
export const TextTitle = styled.h1`
  margin-top: 44px;
  margin-bottom: 28px;
  color: ${(props) => props.theme.colors.link};
  font-size: 54px;
  z-index: 10;
`;
export const Text = styled.span`
  background-image: ${(props) => props.theme.colors.subTitle};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  left: -4px;
  bottom: -23px;
  z-index: -1;
`;
