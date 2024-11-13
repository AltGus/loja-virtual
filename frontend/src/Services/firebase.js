// src/services/firebase.js
import { initializeApp } from 'firebase/app';  // Importando a função para inicializar o Firebase
import { getFirestore } from 'firebase/firestore';  // Importando a função para acessar o Firestore
import { getAuth } from 'firebase/auth';  // Importando a função para acessar o Firebase Authentication

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDhodAodWtuMKPiOel63WOByu2Ji8yd3Rc",
  authDomain: "projeto-do-semestre.firebaseapp.com",
  projectId: "projeto-do-semestre",
  storageBucket: "projeto-do-semestre.appspot.com",  // 
  appId: "1:29616694786:web:90110ea113365f1c4ce91b",
  measurementId: "G-SBTHHH75T2"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);

// Inicializando Firestore e Auth
const db = getFirestore(app);  // Objeto Firestore para interagir com o banco de dados
const auth = getAuth(app);  // Objeto Auth para autenticação de usuários

// Exportando Firestore e Auth para serem usados em outras partes do projeto
export { db, auth };
