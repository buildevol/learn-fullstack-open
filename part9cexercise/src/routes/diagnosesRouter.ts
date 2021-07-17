import express from 'express';
import diagnoses from '../../data/diagnosesData';

const diagnosesRouter = express.Router();

diagnosesRouter.get('/', (_req, res) => {
  res.send(diagnoses);
});

export default diagnosesRouter;
