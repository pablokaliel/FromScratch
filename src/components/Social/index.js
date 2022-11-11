import { motion } from "framer-motion";
import "./styles.css";


function Social({ url, children }) {
  return (
    <motion.a
    initial={{opacity:0,y:50}}
    animate = {{opacity:1,y:0}}
    transition={{ duration: 1}}
    className="social" href={url} rel="noopener noreferrer" target="_blank">
      {children}
    </motion.a>
  );
}

export default Social;
