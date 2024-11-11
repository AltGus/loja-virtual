const { Product } = require('../models/productModel');

// Função para criar um novo produto
exports.createProduct = async (req, res) => {
  const { name, price, description, imageUrl } = req.body;

  try {
    const product = new Product({ name, price, description, imageUrl });
    await product.save();

    res.status(201).json({ message: 'Produto criado com sucesso', product });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar o produto' });
  }
};

// Função para obter todos os produtos
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter os produtos' });
  }
};

// Função para obter um produto por id
exports.getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter o produto' });
  }
};

// Função para atualizar um produto
exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, description, imageUrl } = req.body;

  try {
    const product = await Product.findByIdAndUpdate(
      id,
      { name, price, description, imageUrl },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    res.status(200).json({ message: 'Produto atualizado com sucesso', product });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar o produto' });
  }
};

// Função para excluir um produto
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    res.status(200).json({ message: 'Produto excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir o produto' });
  }
};
