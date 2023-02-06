import styled from "styled-components";
import { motion } from "framer-motion";

export const HrefLink = styled(motion.a)`
  transition-duration: all 0.4s;

  :hover {
    transform: scale(1.06);
  }
`;
