import React, { useEffect, useState } from 'react';
import { fetchProductsByCategory } from '../../Services/api.js'; // Importando as funções de API
import './HomePage.css';
import ProductCard from '../../Components/ProductCard/ProductCard';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('electronics'); // Categoria selecionada

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProductsByCategory(selectedCategory); // Buscando produtos pela categoria
        setProducts(data);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      }
    };
    loadProducts();
  }, [selectedCategory]); // Recarregar produtos sempre que a categoria mudar

  return (
    <div className="homepage-container">
      {/* Hero Section - Título e boas-vindas */}
      <div className="hero-section">
        <h1>RPG Store</h1>
        <p>Bem-vindo à loja de produtos exclusivos para RPGs!</p>
      </div>

      {/* Listagem dos produtos */}
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Carregando produtos...</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
