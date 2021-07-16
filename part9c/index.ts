import express from 'express';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get('/ping', (_req, res) => {
  console.log('Ping Received.');
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
