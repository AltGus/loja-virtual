// src/Pages/ProductPage/ProductPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../Services/api.js'; // Importando a função correta para buscar o produto pelo ID

const ProductPage = () => {
  const { id } = useParams();  // Pegando o 'id' do produto da URL
  const [product, setProduct] = useState(null);  // Estado para armazenar o produto
  const [loading, setLoading] = useState(true);  // Estado para controle de carregamento
  const [error, setError] = useState(null);  // Estado para tratar erros

  // Função para buscar os detalhes do produto
  useEffect(() => {
    const getProduct = async () => {
      try {
        const productData = await fetchProductById(id);  // Função para buscar o produto pelo id
        setProduct(productData);
      } catch (err) {
        setError('Erro ao carregar o produto');
      } finally {
        setLoading(false);  // Define loading como false após o carregamento
      }
    };

    getProduct();  // Chama a função de busca
  }, [id]);  // Recarrega sempre que o id da URL mudar

  // Exibição enquanto carrega
  if (loading) {
    return <p>Carregando...</p>;
  }

  // Exibição de erro, caso haja algum
  if (error) {
    return <p>{error}</p>;
  }

  // Exibição do produto
  return (
    <div className="product-page">
      {product ? (
        <div className="product-details">
          <h2>{product.name}</h2>
          <img src={product.imageUrl} alt={product.name} />
          <p>{product.description}</p>
          <p><strong>Preço:</strong> R${product.price}</p>
          <button>Add to Cart</button> {/* Aqui você pode adicionar lógica de carrinho */}
        </div>
      ) : (
        <p>Produto não encontrado.</p>
      )}
    </div>
  );
};

export default ProductPage;
