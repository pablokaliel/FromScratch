import Social from "../../components/Social";
import "./styles.css";
import { FaInstagram, FaGithub, FaDiscord } from "react-icons/fa";
import { useState, useEffect } from "react";

import { db } from "../../services/firebaseConnection";
import {
  getDoc,
  collection,
  orderBy,
  query,
  doc,
  getDocs,
} from "firebase/firestore";

function Home() {
  const [links, setLinks] = useState([]);

  const [socialLinks, setSocialLinks] = useState({});

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
    
      <h1>Pablo Kaliel</h1>
      <span>Veja meus links abaixo: 👇</span>

      <main className="links">
       
        {links.map((item) => (
         
         <section
            key={item.id}
            className="link-area"
            style={{ backgroundColor: item.bg }}
          >
            
            <a href={item.url} target="blank">
              <p className="link-text" style={{ color: item.color }}>
                {item.name}
              </p>
            </a>
        
          </section>
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
