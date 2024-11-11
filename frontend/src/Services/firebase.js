// src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";  // Corrigido para importar do SDK do Firebase

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDhodAodWtuMKPiOel63WOByu2Ji8yd3Rc",
  authDomain: "projeto-do-semestre.firebaseapp.com",
  projectId: "projeto-do-semestre",
  storageBucket: "projeto-do-semestre.firebasestorage.app",
  messagingSenderId: "29616694786",
  appId: "1:29616694786:web:90110ea113365f1c4ce91b",
  measurementId: "G-SBTHHH75T2"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);

// Inicializando Firestore e Auth
const db = getFirestore(app);
const auth = getAuth(app);

// Exportando Firestore e Auth
export { db, auth };
