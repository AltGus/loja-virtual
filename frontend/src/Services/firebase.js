// src/services/firebase.js
import { initializeApp, getApps } from 'firebase/app';  // Importando também getApps
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDhodAodWtuMKPiOel63WOByu2Ji8yd3Rc",
  authDomain: "projeto-do-semestre.firebaseapp.com",
  projectId: "projeto-do-semestre",
  storageBucket: "projeto-do-semestre.appspot.com",
  appId: "1:29616694786:web:90110ea113365f1c4ce91b",
  measurementId: "G-SBTHHH75T2"
};

// Verifica se já existe uma instância do Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Inicializando os serviços do Firebase
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Exportando os serviços
export { auth, db, storage };
