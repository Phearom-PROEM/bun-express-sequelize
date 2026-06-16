import express from 'express';
import sequelize from './config/database';
import userRoutes from './routes/user.routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', userRoutes);

const startServer = async () => {
  try {
    // ពិនិត្យមើលការភ្ជាប់ទៅកាន់ Database
    await sequelize.authenticate();
    console.log('📦 មូលដ្ឋានទិន្នន័យត្រូវបានភ្ជាប់ជោគជ័យ!');
    
    app.listen(PORT, () => {
      console.log(`Server កំពុងដំណើរការលើរលកសញ្ញា: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('មិនអាចភ្ជាប់ទៅកាន់មូលដ្ឋានទិន្នន័យបានទេ:', error);
  }
};

startServer();
