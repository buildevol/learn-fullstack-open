import express from 'express';

const PORT = 3001;

const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
