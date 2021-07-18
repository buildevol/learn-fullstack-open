import patients from '../../data/patientsData';
import { NonSensitivePatients, PatientsType } from '../types';

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

export default {
  getPatients,
  getNonSensitivePatients,
};
