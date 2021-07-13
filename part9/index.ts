import express from 'express';
import { calculator } from './calculator';

const PORT = 3003;
const app = express();

app.use(express.json());

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.post('/calculate', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { value1, value2, op } = req.body;

  const result = calculator(value1, value2, op);

  res.json({
    result,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
