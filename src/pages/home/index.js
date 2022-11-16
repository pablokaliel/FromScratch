import Social from "../../components/Social";
import "./styles.css";
import { FaInstagram, FaGithub, FaDiscord } from "react-icons/fa";
import { useState, useEffect } from "react";
import LogoTwo from "../../components/logotwo";
import { motion } from "framer-motion";

import { db } from "../../services/firebaseConnection";
import {
  getDoc,
  collection,
  orderBy,
  query,
  doc,
  getDocs,
} from "firebase/firestore";

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../components/languageSwitcher";

function Home() {
 
  const [links, setLinks] = useState([]);

  const [socialLinks, setSocialLinks] = useState({});

  const { t } = useTranslation();

  useEffect(() => {
    function loadLinks() {
      const linksRef = collection(db, "links");
      const queryRef = query(linksRef, orderBy("created", "asc"));

      getDocs(queryRef).then((snapshot) => {
        let list = [];

        snapshot.forEach((doc) => {
          list.push({
            id: doc.id,
            name: doc.data().name,
            url: doc.data().url,
            bg: doc.data().bg,
            color: doc.data().color,
          });
        });
        setLinks(list);
      });
    }
    loadLinks();
  }, []);

  useEffect(() => {
    function loadSocialLinks() {
      const docRef = doc(db, "social", "link");

      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setSocialLinks({
            instagram: snapshot.data().instagram,
            github: snapshot.data().github,
            discord: snapshot.data().discord,
          });
        }
      });
    }
    loadSocialLinks();
  }, []);

  return (
    <div className="container">
      <LanguageSwitcher />

      <LogoTwo nameone="Pablo" nametwo="Kaliel" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {t("linksBelow")}: 👇
      </motion.span>

      <main className="links">
        {links.map((item) => (
          <motion.section
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0, type: "spring", bounce: 0.2 }}
            transition={{ duration: 1 }}
            key={item.id}
            className="link-area"
            style={{ backgroundColor: item.bg }}
          >
            <motion.a
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0, type: "spring", bounce: 0.2 }}
              transition={{ duration: 1, delay: 1.3 }}
              href={item.url}
              target="blank"
            >
              <p className="link-text" style={{ color: item.color }}>
                {item.name}
              </p>
            </motion.a>
          </motion.section>
        ))}

        {links.length !== 0 && Object.keys(socialLinks).length > 0 && (
          <footer>
            <Social url={socialLinks?.instagram}>
              <FaInstagram size={35} color="#fff" />
            </Social>

            <Social url={socialLinks?.github}>
              <FaGithub size={35} color="#fff" />
            </Social>

            <Social url={socialLinks?.discord}>
              <FaDiscord size={35} color="#fff" />
            </Social>
          </footer>
        )}
      </main>
    </div>
  );
}

export default Home;
