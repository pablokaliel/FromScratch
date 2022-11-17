import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import brasil from "./assets/brasil.png";
import estadosUnidos from "./assets/estados-unidos.png";
import "./styles.css";

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  const languageOptions = [
    {
      name: "Portugues", value: "ptBR", flag: brasil,
    },
    {
      name: "English", value: "en", flag: estadosUnidos,
    },
  ];

  return (
    <motion.div className="language-switcher"
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0, }}

      transition={{ duration: 1,type:"spring",damping:10,stiffness:150,delay:0.9}}
      >
      {languageOptions.map((languageOption) => (
        <button
          key={languageOption.value}
          onClick={() => {
            i18n.changeLanguage(languageOption.value);
          }}
        >
          <img
            className="imageLogo"
            src={languageOption.flag}
            alt={languageOption.name}
          />
          <span
            style={{
              fontWeight:
                i18n.language === languageOption.value ? "bold" : "normal",
              textDecoration:
                i18n.language === languageOption.value ? "underline" : "none",
            }}
          >
            {languageOption.name}
          </span>
        </button>
      ))}
    </motion.div>
  );
}

export default LanguageSwitcher;
