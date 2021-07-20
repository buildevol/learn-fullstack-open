import { v4 as uuid } from 'uuid';
import patients from '../../data/patientsData';
import { NewPatient, NonSensitivePatients, PatientsType } from '../types';

const getPatients = (): PatientsType[] => {
  return patients;
};

const getNonSensitivePatients = (): NonSensitivePatients[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation, entries }) => {
    return {
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
      entries,
    };
  });
};

const addPatient = (patient: NewPatient): PatientsType => {
  const newPatientEntry = {
    id: uuid(),
    ...patient,
  };

  patients.push(newPatientEntry);
  return newPatientEntry;
};

const getPatientById = (id: string): PatientsType | undefined => {
  const patient = patients.find((current) => current.id === id);
  return patient;
};

export default {
  getPatients,
  getNonSensitivePatients,
  addPatient,
  getPatientById,
};
