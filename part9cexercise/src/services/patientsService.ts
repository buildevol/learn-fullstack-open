import { v4 as uuid } from 'uuid';
import patients from '../../data/patientsData';
import { NewPatient, NonSensitivePatients, PatientsType } from '../types';

const getPatients = (): PatientsType[] => {
  return patients;
};

const getNonSensitivePatients = (): NonSensitivePatients[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => {
    return {
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
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

export default {
  getPatients,
  getNonSensitivePatients,
  addPatient,
};
