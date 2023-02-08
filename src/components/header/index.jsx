import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { auth } from "../../services/firebaseConnection";
import { signOut } from "firebase/auth";
import { useTranslation } from "react-i18next";

import { AdminHeader, NavHeader } from "./styles";

function Header() {
  const { t } = useTranslation();

  async function handleLogout() {
    await signOut(auth);
  }

  return (
    <AdminHeader className="admin-header">
      <NavHeader className="nav-header">
        <Link to="/">
          {" "}
          <button onClick={handleLogout}>
            <BiLogOut size={28} color="#db2629" />
          </button>
        </Link>

        <Link to="/admin">{t("links")}</Link>
        <Link to="/admin/social">{t("netWorks")}</Link>
      </NavHeader>
    </AdminHeader>
  );
}

export default Header;
