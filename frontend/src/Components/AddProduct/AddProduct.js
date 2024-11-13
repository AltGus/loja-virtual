import React, { useState } from 'react';
import { addProduct } from '../../Services/api'; // Função que interage com o Firebase para adicionar produto
import { useNavigate } from 'react-router-dom'; // Importando useNavigate em vez de useHistory

import './AddProduct.css';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    img: ''
  });

  const navigate = useNavigate(); // Usando useNavigate para redirecionar para a home após adicionar o produto

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  // Função para adicionar o produto ao Firebase
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProduct(product); // Adiciona o produto ao Firestore
      navigate('/'); // Redireciona para a HomePage após o sucesso
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
    }
  };

  return (
    <div className="add-product">
      <h2>Adicionar Produto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Preço</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Categoria</label>
          <input
            type="text"
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="img">URL da Imagem</label>
          <input
            type="text"
            id="img"
            name="img"
            value={product.img}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn">Adicionar Produto</button>
      </form>
    </div>
  );
};

export default AddProduct;
