// src/Pages/HomePage/HomePage.js
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../../Services/api.js';
import { Link } from 'react-router-dom';  // Adicione esta linha no topo do seu arquivo
import './HomePage.css'; // Importando o arquivo de estilo

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      }
    };
    loadProducts();
  }, []);

  return (
    <div>
      <h1>Lista de Produtos</h1>

      {/* Navegação adicional */}
      <nav>
        <Link to="/cart">Carrinho</Link> | 
        <Link to="/login">Login</Link> | 
        <Link to="/favorites">Favoritos</Link> | 
        <Link to="/profile">Perfil</Link>
      </nav>

      {/* Listagem dos produtos */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}> {/* Link para a página do produto */}
              {product.name} - R$ {product.price.toFixed(2)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;