import React, { useState, useEffect } from 'react';
import AppRoutes from './Routes/AppRoutes'; // Importando as rotas

// Firebase
import { db } from './Services/api'; // Importando o 'db' corretamente
import { getDocs, collection } from 'firebase/firestore'; // Funções necessárias para o Firestore

// Contexto de Autenticação
import { AuthProvider } from './Contexts/AuthContext';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [filteredItems, setFilteredItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "items"));
        const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setFilteredItems(items);
      } catch (error) {
        console.error("Erro ao buscar os itens:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cartItems];
    const productIndex = updatedCart.findIndex((item) => item.id === product.id);

    if (productIndex >= 0) {
      updatedCart[productIndex].quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const calculateTotal = (items) => {
    const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(totalAmount);
  };

  return (
    <AuthProvider>
      <div>
        <AppRoutes
          loading={loading}
          filteredItems={filteredItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          cartItems={cartItems}
          total={total}
        />
      </div>
    </AuthProvider>
  );
};

export default App;
