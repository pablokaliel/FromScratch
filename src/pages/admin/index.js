import { useState } from "react";
import Header from "../../components/header";
import "./styles.css";
import Logo from "../../components/Logo";
import Input from "../../components/input";

import { MdAddLink } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";
import { db } from "../../services/firebaseConnection";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  deleteDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";

function Admin() {
  
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [backgroundColorInput, setBackgroundColorInput] = useState("#f1f1f1");
  const [textColorInput, setTextColorInput] = useState("#121212");

  async function handleRegister(e) {
    e.preventDefault();

    if (nameInput.value === "" || urlInput === "") {
      toast.warn("Preencha todos os campos.");
      return;
    }
   
    addDoc(collection(db, "links"), {
      name: nameInput,
      url: urlInput,
      bg: backgroundColorInput,
      color: textColorInput,
      created: new Date(),
    })
      .then(() => {
        setNameInput("");
        setUrlInput("");
        console.log("link registrado");
      })
      .catch((error) => {
        console.log("error ao registrar" + error);
        toast.error("Ops, Erro ao salvar.");
      });
  }

  return (
    
    <div className="admin-container">
    
      <Header />
      <Logo />

      <form className="form" onSubmit={handleRegister}>
        <label className="label">Nome do Link</label>

        <Input
          placeholder="informe nome do Link..."
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />

        <label className="label">URL do Link</label>

        <Input
          type="url"
          placeholder="Informe a URL..."
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />

        <section className="container-colors">
       
          <div>
          
            <label className="label right">Fundo do link</label>
            <input
              type="color"
              value={backgroundColorInput}
              onChange={(e) => setBackgroundColorInput(e.target.value)}
            />
          
          </div>

          <div>
          
            <label className="label right">Cor do link</label>
            <input
              type="color"
              value={textColorInput}
              onChange={(e) => setTextColorInput(e.target.value)}
            />
          </div>
       
        </section>

        {nameInput !== "" && (
         
         <div className="preview">
          
            <label className="label">veja como esta ficando</label>
          
            <article
              style={{
                marginBottom: 8,
                marginTop: 8,
                backgroundColor: backgroundColorInput,
              }}
              className="list"
            >
              <p style={{ color: textColorInput }}>{nameInput}</p>
          
            </article>
         
          </div>
        )}

        <button className="btn-register" type="submit">
          Cadastrar <MdAddLink />
        </button>
     
      </form>

      <h2 className="title">Meus Links</h2>

      <article
        className="list animate-pop"
        style={{ backgroundColor: "#000", color: "#fff" }}
      >
        <p>Grupo exclusivo do Telegram</p>
       
        <div>
        
          <button className="btn-delete">
            <FiTrash2 size={18} color="#FFF" />
          </button>
        
        </div>
     
      </article>
    
    </div>
  );
}

export default Admin;
