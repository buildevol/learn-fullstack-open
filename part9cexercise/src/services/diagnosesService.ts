import diagnoses from '../../data/diagnosesData';
import { DiagnosesType } from '../types';

const getDiagnoses = (): DiagnosesType[] => {
  return diagnoses;
};

export default {
  getDiagnoses,
};
