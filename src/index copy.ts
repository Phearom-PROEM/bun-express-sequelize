
import express from 'express';
import bodyParser from 'body-parser'; 
import sequelize from './config/database';
import userRoutes from './routes/user.routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', userRoutes);

const startServer = async () => {
  try {
    // Connected Database
    await sequelize.authenticate();
    console.log('Connected to db!');

    app.listen(PORT, () => {
      console.log(`Server on port: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unconnected to db:', error);
  }
};

startServer();
