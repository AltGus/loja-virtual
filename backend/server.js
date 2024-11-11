// backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 27017;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
