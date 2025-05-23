import express from 'express';
import usersRouter from './routes/users.route';
import productRouter from './routes/product.route';
import cors from 'cors';

const app = express();
app.use(cors());
const PORT = 3030;

app.use(express.json());

// Pakai router modular
app.use('/users', usersRouter)
app.use('/product', productRouter)

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
