// src/Services/api.js

// Importando as funcionalidades do Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, getDoc, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDhodAodWtuMKPiOel63WOByu2Ji8yd3Rc',
  authDomain: 'projeto-do-semestre.firebaseapp.com',
  projectId: 'projeto-do-semestre',
  storageBucket: 'projeto-do-semestre.appspot.com',
  messagingSenderId: '29616694786',
  appId: '1:29616694786:web:90110ea113365f1c4ce91b',
  measurementId: 'G-SBTHHH75T2'
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);

// Inicializando os serviços do Firebase
const db = getFirestore(app);
const auth = getAuth(app);

//
// Funções de Autenticação
//

// Registrar um novo usuário
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Erro ao registrar usuário:', error.message);
    throw error;
  }
};

// Fazer login com email e senha
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Erro ao fazer login:', error.message);
    throw error;
  }
};

// Fazer logout
export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Erro ao sair:', error.message);
    throw error;
  }
};

//
// Funções de CRUD com Firestore (produtos)
//

// Adicionar um novo produto
export const addProduct = async (product) => {
  try {
    const productRef = await addDoc(collection(db, 'products'), product);
    return productRef.id;
  } catch (error) {
    console.error('Erro ao adicionar produto:', error.message);
    throw error;
  }
};

// Buscar todos os produtos
export const fetchProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return products;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error.message);
    throw error;
  }
};

// Buscar um produto específico pelo ID
export const fetchProductById = async (productId) => {
  try {
    const productRef = doc(db, 'products', productId);
    const productSnap = await getDoc(productRef);
    if (productSnap.exists()) {
      return { id: productSnap.id, ...productSnap.data() };
    } else {
      throw new Error('Produto não encontrado');
    }
  } catch (error) {
    console.error('Erro ao buscar produto:', error.message);
    throw error;
  }
};

// Atualizar produto
export const updateProduct = async (productId, updatedData) => {
  try {
    const productRef = doc(db, 'products', productId);
    await updateDoc(productRef, updatedData);
  } catch (error) {
    console.error('Erro ao atualizar produto:', error.message);
    throw error;
  }
};

// Excluir produto
export const deleteProduct = async (productId) => {
  try {
    const productRef = doc(db, 'products', productId);
    await deleteDoc(productRef);
  } catch (error) {
    console.error('Erro ao excluir produto:', error.message);
    throw error;
  }
};

// Exportação dos serviços de autenticação e banco de dados
export { db, auth };
