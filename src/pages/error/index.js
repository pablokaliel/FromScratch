import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Logo from "../../components/logotwo";
import "./styles.css";

function Error() {
  const { t } = useTranslation();

  return (
    <div className="error">
      <Link to="/">
        <Logo nameone="Page" nametwo="Error" />
      </Link>

      <h1>{t("pageNotFound")}</h1>
      <p>{t("pageNotExist")}</p>

      <Link className="link" to="/">
        {t("backHome")}
      </Link>
    </div>
  );
}

export default Error;
