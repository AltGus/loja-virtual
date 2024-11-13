import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchProductById } from '../../Services/api'; // Função para buscar o produto pelo ID
import './CartPage.css'; // Importe o estilo do seu arquivo CSS de carrinho

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]); // Para armazenar os itens no carrinho
  const [total, setTotal] = useState(0); // Para armazenar o total do carrinho
  const navigate = useNavigate(); // Para navegação entre páginas

  // Recupera os produtos do carrinho do localStorage quando o componente for montado
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
    calculateTotal(cart); // Atualiza o total após buscar os itens
  }, []); // O array vazio garante que isso aconteça apenas uma vez após o carregamento

  // Função que calcula o total do carrinho
  const calculateTotal = (items) => {
    const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(totalAmount);
  };

  // Função para remover um item do carrinho
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId); // Filtra o item a ser removido
    setCartItems(updatedCart); // Atualiza o estado com o carrinho modificado
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Atualiza o localStorage
    calculateTotal(updatedCart); // Recalcula o total após remoção
  };

  // Função para aumentar a quantidade de um produto no carrinho
  const increaseQuantity = (productId) => {
    const updatedCart = cartItems.map(item => 
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  // Função para diminuir a quantidade de um produto no carrinho
  const decreaseQuantity = (productId) => {
    const updatedCart = cartItems.map(item => 
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  // Função para finalizar a compra e redirecionar para a página de checkout
  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-container">
      <h1>Carrinho de Compras</h1>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <div>
          <ul className="cart-items-list">
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <div>
                  <img src={item.img} alt={item.name} className="cart-item-image" />
                  <h3>{item.name}</h3>
                  <p>Preço: R${item.price}</p>
                  <p>Quantidade: {item.quantity}</p>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <button onClick={() => removeFromCart(item.id)}>Remover</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: R${total}</h3>
          <button onClick={handleCheckout} className="checkout-btn">Finalizar Compra</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
