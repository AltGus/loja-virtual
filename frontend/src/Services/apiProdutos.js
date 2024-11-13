/* ----------------- */
// Funções para Produtos
/* ----------------- */

// Objeto contendo algumas categorias de produtos
export const categories = {
    electronics: '#FF4422',
    clothing: '#51A8FF',
    food: '#8BD46E',
    home: '#FFD451',
    sports: '#C56E60',
    toys: '#7CD3FF',
  };
  
  // Função utilitária para capitalizar a primeira letra de uma string
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  // Função para buscar todos os produtos da API
  export const fetchProducts = async () => {
    const productCount = 30; // Definir a quantidade de produtos
    const products = [];
  
    for (let i = 1; i <= productCount; i++) {
      const url = `https://dummyjson.com/products/${i}`;
      const resp = await fetch(url);
      const data = await resp.json();
  
      const product = {
        id: data.id,
        name: capitalizeFirstLetter(data.title),
        category: data.category,
        price: data.price,
        img: data.image,
      };
  
      products.push(product);
    }
  
    return products;
  };
  
  // Função para buscar um único produto pela ID
  export const fetchProductById = async (id) => {
    const url = `https://dummyjson.com/products/${id}`;
    const resp = await fetch(url);
    const data = await resp.json();
  
    const product = {
      id: data.id,
      name: capitalizeFirstLetter(data.title),
      category: data.category,
      price: data.price,
      description: data.description,
      img: data.image,
    };
  
    return product;
  };
  
  // Função para buscar produtos por categoria
  export const fetchProductsByCategory = async (category) => {
    const url = `https://dummyjson.com/products/category/${category}`;
    const resp = await fetch(url);
    const data = await resp.json();
  
    return data.products.map((product) => ({
      id: product.id,
      name: capitalizeFirstLetter(product.title),
      category: product.category,
      price: product.price,
      img: product.image,
    }));
  };
  
  // Função para adicionar um novo produto
  export const addProduct = async (newProduct) => {
    const url = 'https://dummyjson.com/products/add';
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    });
    const data = await resp.json();
    return data;
  };
  
  // Função para atualizar um produto
  export const updateProduct = async (id, updatedData) => {
    const url = `https://dummyjson.com/products/${id}`;
    const resp = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData),
    });
    const data = await resp.json();
    return data;
  };
  
  // Função para excluir um produto
  export const deleteProduct = async (id) => {
    const url = `https://dummyjson.com/products/${id}`;
    const resp = await fetch(url, {
      method: 'DELETE',
    });
    const data = await resp.json();
    return data;
  };
  
  