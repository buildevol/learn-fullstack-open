import express from 'express';

const pingRouter = express.Router();

pingRouter.get('/', (_req, res) => {
  console.log('Ping Received.');
  res.send('pong');
});

export default pingRouter;
