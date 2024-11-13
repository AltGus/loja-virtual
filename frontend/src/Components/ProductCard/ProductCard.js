import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  // Garantir que product.price seja um número
  const price = typeof product.price === 'number' ? product.price : parseFloat(product.price);

  return (
    <div className="product-card">
      {/* Imagem do Produto */}
      <div className="product-card__image">
        <img 
          src={product.img || 'default-image-url.jpg'} 
          alt={product.name || 'Imagem do produto'} 
        />
      </div>

      {/* Conteúdo do Produto */}
      <div className="product-card__content">
        <h3 className="product-card__title">{product.name || 'Produto sem nome'}</h3>
        <p className="product-card__price">
          {price && !isNaN(price) ? `R$${price.toFixed(2)}` : 'Preço indisponível'}
        </p>
        <p className="product-card__category">{product.category || 'Categoria desconhecida'}</p>
        
        {/* Limita a descrição a 100 caracteres */}
        {product.description && (
          <p className="product-card__description">
            {product.description.length > 100
              ? `${product.description.substring(0, 100)}...`
              : product.description}
          </p>
        )}
      </div>

      {/* Ações do Produto */}
      <div className="product-card__actions">
        <button className="btn add-to-cart">Adicionar ao Carrinho</button>
        <button className="btn view-details">Favoritar</button>
      </div>
    </div>
  );
};

export default ProductCard;
