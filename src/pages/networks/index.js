import Header from "../../components/header";
import Input from "../../components/input";
import "./styles.css";

import { MdAddLink } from "react-icons/md";
import { useEffect, useState } from "react";
import { db } from "../../services/firebaseConnection";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

function Networks() {
 
  const [instagram, setInstagram] = useState("");
  const [github, setGitHub] = useState("");
  const [discord, setDiscord] = useState("");

  useEffect(() => {
  
    function loadLinks() {
      const docRef = doc(db, "social", "link");
      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setInstagram(snapshot.data().instagram);
          setGitHub(snapshot.data().github);
          setDiscord(snapshot.data().discord);
        }
      });
    }
    loadLinks();
  }, []);

  function handleSave(e) {
    e.preventDefault();

    setDoc(doc(db, "social", "link"), {
      instagram: instagram,
      github: github,
      discord: discord,
    })
      .then(() => {
        toast.success("URL'S salvas com sucesso!");
      })
      .catch((error) => {
        toast.error("Erro ao tentar salvar URL'S.");
      });
  }

  return (
    <div className="admin-container">
      <Header />

      <h1 className="title-social">Suas redes sociais</h1>

      <form className="form" onSubmit={handleSave}>
       
        <label className="label">Link do Instagram</label>
        <Input
          placeholder="Digite a URL do instagram..."
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />
        
        <label className="label">Link do gitHub</label>
        <Input
          placeholder="Digite a URL do GitHub..."
          value={github}
          onChange={(e) => setGitHub(e.target.value)}
        />
       
        <label className="label">Link do Discord</label>
        <Input
          placeholder="Digite a URL do Discord..."
          value={discord}
          onChange={(e) => setDiscord(e.target.value)}
        />

        <button type="submit" className="btn-register">
          Salvar Links <MdAddLink size={24} color="#fff" />
        </button>
     
      </form>
    
    </div>
  );
}

export default Networks;
