import { BiLogOut } from "react-icons/bi";
import { auth } from "../../services/firebaseConnection";
import { signOut } from "firebase/auth";
import { useTranslation } from "react-i18next";

import { AdminHeader, NavHeader,LinkBack,LinkSocial } from "./styles";

function Header() {
  const { t } = useTranslation();

  async function handleLogout() {
    await signOut(auth);
  }

  return (
    <AdminHeader className="admin-header">
      <NavHeader className="nav-header">
        <LinkBack to="/">
          {" "}
          <button onClick={handleLogout}>
            <BiLogOut size={28} color="#db2629" />
          </button>
        </LinkBack>

        <LinkSocial to="/admin">{t("links")}</LinkSocial>
        <LinkSocial to="/admin/social">{t("netWorks")}</LinkSocial>
      </NavHeader>
    </AdminHeader>
  );
}

export default Header;
