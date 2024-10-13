import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';

// Carregar variáveis de ambiente
dotenv.config();

const app = express();
app.use(express.json());
app.use(userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});