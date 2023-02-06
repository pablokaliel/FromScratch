import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 14px 0;
  align-items: center;
  justify-self: center;
  overflow: hidden;

  @media screen and (max-width: 360) {
    h1 {
      font-size: 24px;
      text-align: center;
    }
  }

  @media screen and (max-width: 550px) {
    h1 {
      font-size: 32px;
      text-align: center;
    }
  }
`;
export const AboutMe = styled(motion.span)`
  color: #f1f1f1;
  margin-bottom: 18px;
  max-width: 600px;
  text-align: justify;
  padding: 0 15px;
`;
export const Links = styled.main`
  display: flex;
  max-width: 600px;
  width: 90%;
  text-align: center;
  flex-direction: column;
`;
export const SectionArea = styled.div`
  padding: 12px;
  max-height: 570px;
  flex-direction: column;
  background-color: transparent;
  margin-bottom: 60px;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 8px;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
export const HRef = styled(motion.a)``;

export const LinkArea = styled(motion.div)`
  background-color: #fff;
  width: 100%;
  margin-bottom: 18px;
  padding: 8px 0;
  user-select: none;
  border-radius: 4px;
  transition: all 0.5s ease-in-out;
  :hover {
    transform: scale(1.04);
  }

  @media screen and (max-width: 550px) {
    .link-text {
      font-size: 16px;
    }
  }
`;
export const TextP = styled(motion.p)`
  font-size: 18px;
  line-height: 150%;
  color: #000;
`;
export const FooterArea = styled.footer`
  display: flex;
  justify-content: center;
  gap: 14px;
  margin: 18px 0;
`;

// .container {

// }

// .container h1 {
//   margin-bottom: 14px;
//   color: #fff;
//   font-size: 44px;
//   padding-top: 94px;
// }

// .container span {

// }

// .links {

// }

// .link-area {

// }

// .link-text {

// }
// .about-me {

// }

// .link-area:hover {

// }

// footer {

// }

//

// .section-area {

// }
// .section-area

// /* Track */
// .section-area

// /* Handle */
// .section-area

// /* Handle on hover */
// .section-area

//   .link-text {

//   }
// }
