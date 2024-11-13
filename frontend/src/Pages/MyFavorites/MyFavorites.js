import React, { useState, useEffect } from 'react';
import { fetchFavorites, removeFavorite } from '../../Services/api'; // Corrigido para funções nomeadas
import './MyFavorites.css';

const MyFavorites = () => {
  const [favorites, setFavorites] = useState([]); // Estado para armazenar os favoritos

  // Carregar os favoritos do usuário ao montar o componente
  useEffect(() => {
    fetchFavoritesList(); // Chama a função que busca os favoritos
  }, []);

  // Função para buscar os favoritos do usuário
  const fetchFavoritesList = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const response = await fetchFavorites(token); // Faz a requisição para buscar os favoritos
      setFavorites(response.data); // Atualiza o estado com os favoritos
    } catch (error) {
      console.error('Erro ao buscar favoritos', error);
    }
  };

  // Função para remover um produto dos favoritos
  const handleRemoveFavorite = async (id) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      await removeFavorite(id, token); // Chama a função de remover com o id do favorito
      setFavorites(favorites.filter(fav => fav._id !== id)); // Remove o favorito da lista
    } catch (error) {
      console.error('Erro ao remover favorito', error);
    }
  };

  return (
    <div className="favorites-container">
      <h2>Meus Favoritos</h2>
      <div className="favorites-list">
        {favorites.length > 0 ? (
          favorites.map(favorite => (
            <div key={favorite._id} className="favorite-card">
              <p>{favorite.productName}</p>
              <button onClick={() => handleRemoveFavorite(favorite._id)}>Remover</button>
            </div>
          ))
        ) : (
          <p>Nenhum produto favoritado ainda.</p>
        )}
      </div>
    </div>
  );
};

export default MyFavorites;
