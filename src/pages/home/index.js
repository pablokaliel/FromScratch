import Social from "../../components/Social";
import "./styles.css";
import {FaFacebook,FaInstagram,FaGithub} from  'react-icons/fa'

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
          <Social url="https://facebook.com/pablokaliel">
            <FaFacebook size={35} color="#fff"/>
          </Social>
          <Social url="https://instagram.com/pablokaliel">
            <FaInstagram size={35} color="#fff"/>
          </Social>
          <Social url="https://github.com/pablokaliel">
            <FaGithub size={35} color="#fff"/>
          </Social>
        </footer>
      </main>
    </div>
  );
}

export default Home;
