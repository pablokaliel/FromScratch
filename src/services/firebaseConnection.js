import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD0SPT_PrX0atLv16EBFLMqwdP0FMKpz2Y",
  authDomain: "devlinks-155d9.firebaseapp.com",
  projectId: "devlinks-155d9",
  storageBucket: "devlinks-155d9.appspot.com",
  messagingSenderId: "126118522837",
  appId: "1:126118522837:web:cc12a4f72692dc4a61975c",
  measurementId: "G-JTRG4H9ZW0"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {db, auth};