import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../../Services/api'; // Função para buscar os produtos do Firebase
import ProductCard from '../../Components/ProductCard/ProductCard'; // Componente de exibição dos produtos

import './HomePage.css';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  // Fetch dos produtos quando a página é carregada
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productList = await fetchProducts(); // Chama a função para pegar os produtos do Firestore
        setProducts(productList);
      } catch (error) {
        console.error("Erro ao buscar os produtos:", error);
      }
    };

    loadProducts();
  }, []); // O array vazio significa que será executado apenas uma vez quando o componente for montado

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Bem-vindo à Loja RPG</h1>
        <p>Encontre os melhores itens para suas aventuras de RPG!</p>
      </div>

      {/* Lista de Produtos */}
      <h2 className="section-title">Produtos Disponíveis</h2>
      <div className="product-list">
        {products.length === 0 ? (
          <p>Sem produtos disponíveis no momento.</p>
        ) : (
          // Mapeia os produtos e exibe cada um deles
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
