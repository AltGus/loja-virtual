import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../Services/api.js'; // Função para buscar o produto
import ProductCard from '../../Components/ProductCard/ProductCard'; // Importando o ProductCard
import './ProductPage.css'; // Importando o CSS da página de produto

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
    return <p className="loading">Carregando...</p>;
  }

  // Exibição de erro, caso haja algum
  if (error) {
    return <p className="error">{error}</p>;
  }

  // Exibição do produto usando o ProductCard
  return (
    <div className="product-page">
      {product ? (
        <ProductCard product={product} />  // Passando o produto como prop para o ProductCard
      ) : (
        <p>Produto não encontrado.</p>
      )}
    </div>
  );
};

export default ProductPage;
