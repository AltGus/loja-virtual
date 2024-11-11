import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);  // Para armazenar os itens no carrinho
  const [total, setTotal] = useState(0);  // Para armazenar o total do carrinho
  const navigate = useNavigate();  // Para navegação entre páginas

  // Recupera os produtos do carrinho do localStorage quando o componente for montado
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
    calculateTotal(cart);  // Atualiza o total após buscar os itens
  }, []);  // O array vazio garante que isso aconteça apenas uma vez após o carregamento

  // Função que calcula o total do carrinho
  const calculateTotal = (items) => {
    const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(totalAmount);
  };

  // Função para remover um item do carrinho
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);  // Filtra o item a ser removido
    setCartItems(updatedCart);  // Atualiza o estado com o carrinho modificado
    localStorage.setItem('cart', JSON.stringify(updatedCart));  // Atualiza o localStorage
    calculateTotal(updatedCart);  // Recalcula o total após remoção
  };

  // Função para finalizar a compra e redirecionar para a página de checkout
  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div>
      <h1>Carrinho de Compras</h1>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <div>
                  <h3>{item.name}</h3>
                  <p>Preço: R${item.price}</p>
                  <p>Quantidade: {item.quantity}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remover</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: R${total}</h3>
          <button onClick={handleCheckout}>Finalizar Compra</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;