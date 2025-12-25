import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import contactRouter from './routes/contact';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Autoriser ton front en prod
app.use(cors({
  origin: 'https://monceaudavidconseil.com',
}));

app.use(bodyParser.json());
app.use('/api/contact', contactRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
