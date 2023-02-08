import { LogoTwo, TextTitle, Text } from "./styles";

function Logo(props) {
  return (
    <LogoTwo
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        type: "spring",
        damping: 5,
        stiffness: 150,
        delay: 0.9,
      }}
      className="container-logo-two"
    >
      <TextTitle className="logo-two">
        {props.nameone}
        <Text className="logo-two-text">{props.nametwo}</Text>
      </TextTitle>
    </LogoTwo>
  );
}

export default Logo;
