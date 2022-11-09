import Social from "../../components/Social";
import "./styles.css";
import { FaInstagram, FaGithub, FaDiscord } from "react-icons/fa";

function Home() {
  return (
    <div className="container">
      <h1>Pablo Kaliel</h1>
      <span>Veja meus links abaixo: 👇</span>

      <main className="links">
        <section className="link-area">
          <a href="#">
            <p className="link-text">Youtube</p>
          </a>
        </section>

        <footer>
          <Social url="https://instagram.com/pablokallyel">
            <FaInstagram size={35} color="#fff" />
          </Social>

          <Social url="https://github.com/pablokaliel">
            <FaGithub size={35} color="#fff" />
          </Social>

          <Social url="https://github.com/pablokaliel">
            <FaDiscord size={35} color="#fff" />
          </Social>
        </footer>
      </main>
    </div>
  );
}

export default Home;
