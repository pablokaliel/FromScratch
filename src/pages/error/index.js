import { useTranslation } from "react-i18next";

import Logo from "../../components/logotwo";
import { ContainerError, Title, Text, LinkRef, LinkRefTwo } from "./styles";

function Error() {
  const { t } = useTranslation();

  return (
    <ContainerError className="error">
      <LinkRefTwo to="/">
        <Logo nameone="Page" nametwo="Error" />
      </LinkRefTwo>

      <Title>{t("pageNotFound")}</Title>
      <Text>{t("pageNotExist")}</Text>

      <LinkRef className="link" to="/">
        {t("backHome")}
      </LinkRef>
    </ContainerError>
  );
}

export default Error;
