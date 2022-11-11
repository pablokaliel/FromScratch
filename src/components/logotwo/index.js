import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./styles.css";
function Logo() {
  return (
     <motion.div
     initial={{opacity:0,y:-50}}
     animate = {{opacity:1,y:0}}
     transition={{ duration: 1}}
     className="container-logo-two">
      <h1 className="logo-two">
        Pablo
        <span className="logo-two-text">Kaliel</span>
      </h1>
      </motion.div>
  );
}

export default Logo;
