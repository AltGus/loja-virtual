import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../Services/api.js';
import ProductCard from '../../Components/ProductCard/ProductCard';
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const productData = await fetchProductById(id);
        setProduct(productData);
      } catch (err) {
        setError('Erro ao carregar o produto');
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  if (loading) {
    return <p className="loading">Carregando...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="product-page">
      {product ? (
        <ProductCard product={product} />
      ) : (
        <p>Produto não encontrado.</p>
      )}
    </div>
  );
};

export default ProductPage;
