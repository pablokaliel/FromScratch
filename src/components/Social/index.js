import { motion } from "framer-motion";
import { HrefLink } from "./styles";

function Social({ url, children }) {
  return (
    <HrefLink
      initial={{ opacity: 0, y: 50, rotate: 40 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 1, type: "spring", damping: 7, stiffness: 130 }}
      className="social"
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </HrefLink>
  );
}

export default Social;
