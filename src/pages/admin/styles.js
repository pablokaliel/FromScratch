import styled from "styled-components";

export const AdminContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 6px 30px 6px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const InputColor = styled.input`
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 24px;
  background: none;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);

  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  ::-webkit-color-swatch {
    border: solid 1px #000;
    border-radius: 24px;
  }
`;

export const SectionContainerColors = styled.section`
  display: flex;
  margin: 14px 0;
  gap: 22px;
  justify-items: center;
  align-items: center;
  text-align: center;
`;
export const LabelRight = styled.label`
  margin-right: 14px;
`;
export const Preview = styled.div`
  margin: 0 0 28px 0;
  padding: 4px;
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-self: center;
  flex-direction: column;
`;

export const ArticleList = styled.article`
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(36, 36, 36, 0.35);
  border-radius: 4px;
  padding: 14px 8px;
  margin-bottom: 14px;

  @keyframes animate-pop {
    0% {
      opacity: 0;
      transform: scale(0.7, 0.7);
    }
    100% {
      opacity: 1;
      transform: scale(1, 1);
    }
  }
`;
export const TextP = styled.p``;
export const BtnRegister = styled.button`
  background-color: #36f;
  border-image: linear-gradient(90deg, #0003b9 33%, #c9c6c6) 1;
  border-radius: 4px;
  color: #fff;
  font-size: 18px;
  height: 36px;
  align-items: center;
  border-image: linear-gradient(90deg, #0003b9 33%, #c9c6c6) 1;
  display: flex;
  justify-content: center;
  margin-bottom: 28px;
  width: 100%;
  svg {
    margin-left: 8px;
  }
`;
export const TextH2 = styled.h2`
  color: ${(props) => props.theme.colors.link};
  margin: 28px 0 14px 0;
`;

export const BtnDelete = styled.button`
  border-style: dashed;
  border-image: linear-gradient(to right, #fff, rgb(20, 20, 20)) 14 14 space;
  color: #fff;
  background-color: #000;
  padding: 4px 8px;
  border-radius: 3px;
`;
