import "./styles.css";

import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { auth } from "../../services/firebaseConnection";
import { signOut } from "firebase/auth";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();

  async function handleLogout() {
    await signOut(auth);
  }

  return (
    <header className="admin-header">
      <nav className="nav-header">
        <Link to="/">
          {" "}
          <button onClick={handleLogout}>
            <BiLogOut size={28} color="#db2629" />
          </button>
        </Link>

        <Link to="/admin">{t("links")}</Link>
        <Link to="/admin/social">{t("netWorks")}</Link>
      </nav>
    </header>
  );
}

export default Header;
