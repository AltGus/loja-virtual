import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {/* Imagem do Produto */}
      <div className="product-card__image">
        <img src={product.img} alt={product.name} />
      </div>

      {/* Conteúdo do Produto */}
      <div className="product-card__content">
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__price">R${product.price.toFixed(2)}</p>
        <p className="product-card__category">{product.category}</p>
        {product.description && (
          <p className="product-card__description">{product.description}</p>
        )}
      </div>

      {/* Ações do Produto */}
      <div className="product-card__actions">
        <button className="btn add-to-cart">Adicionar ao Carrinho</button>
        <button className="btn view-details">Ver Detalhes</button>
      </div>
    </div>
  );
};

export default ProductCard;
