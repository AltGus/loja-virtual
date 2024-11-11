const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rota para criar um novo produto
router.post('/create', authMiddleware.verifyToken, productController.createProduct);

// Rota para obter todos os produtos
router.get('/', productController.getAllProducts);

// Rota para obter um produto por id
router.get('/:id', productController.getProductById);

// Rota para atualizar um produto
router.put('/:id', authMiddleware.verifyToken, productController.updateProduct);

// Rota para excluir um produto
router.delete('/:id', authMiddleware.verifyToken, productController.deleteProduct);

module.exports = router;
