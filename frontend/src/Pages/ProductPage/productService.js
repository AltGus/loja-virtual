// src/services/productService.js
import { getDocs, collection } from 'firebase/firestore';
import { db } from './api';  // Supondo que você já tenha configurado o Firebase no arquivo api.js

// Função para buscar todos os produtos do Firestore
export const fetchProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'products'));  // Coleta os produtos da coleção 'products'
    const products = querySnapshot.docs.map(doc => ({
      id: doc.id,  // ID do documento
      ...doc.data() // Dados do documento
    }));
    return products;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error.message);
    throw error;  // Lança o erro para ser tratado em outro lugar
  }
};
