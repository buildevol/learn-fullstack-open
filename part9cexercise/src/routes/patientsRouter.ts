import express from 'express';
import patientsService from '../services/patientsService';
import toNewPatient from '../utils';

const patientsRouter = express.Router();

patientsRouter.get('/', (_req, res) => {
  res.send(patientsService.getPatients());
});

patientsRouter.post('/', (req, res) => {
  try {
    const newPatient = toNewPatient(req.body);
    const addedEntry = patientsService.addPatient(newPatient);
    res.json(addedEntry);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

patientsRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  const patient = patientsService.getPatientById(id);

  if (patient) {
    res.send(patient);
  } else {
    res.sendStatus(404);
  }
});

patientsRouter.post('/:id/entries', (req, res) => {
  const { id } = req.params;
  const addedEntry = patientsService.addEntryToPatient(id, req.body);
  if (addedEntry) {
    res.send(addedEntry);
  } else {
    res.sendStatus(404);
  }
});

export default patientsRouter;
