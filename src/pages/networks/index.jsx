import Header from "../../components/header";
import Input from "../../components/input";
import { AdminContainer, TitleSocial, Form, Label, Button } from "./styles";

import { MdAddLink } from "react-icons/md";
import { useEffect, useState } from "react";
import { db } from "../../services/firebaseConnection";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

function Networks() {
  const { t } = useTranslation();

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
    <AdminContainer className="admin-container">
      <Header />

      <TitleSocial className="title-social">{t("yourNetWorks")}</TitleSocial>

      <Form className="form" onSubmit={handleSave}>
        <Label className="label">Link do Instagram</Label>
        <Input
          placeholder="Digite a URL do instagram..."
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />

        <Label className="label">Link do gitHub</Label>
        <Input
          placeholder="Digite a URL do GitHub..."
          value={github}
          onChange={(e) => setGitHub(e.target.value)}
        />

        <Label className="label">Link do Discord</Label>
        <Input
          placeholder="Digite a URL do Discord..."
          value={discord}
          onChange={(e) => setDiscord(e.target.value)}
        /> 

        <Button type="submit" className="btn-register">
          Salvar Links <MdAddLink size={24} color="#fff" />
        </Button>
      </Form>
    </AdminContainer>
  );
}

export default Networks;
