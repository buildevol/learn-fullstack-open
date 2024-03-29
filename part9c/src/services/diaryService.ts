// import diaryData from '../../data/diaries.json';
import {
  NonSensitiveDiaryEntry,
  DiaryEntry,
  NewDiaryEntry,
} from '../types';
import diaries from '../../data/diariesData';

// // Type assertion
// const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

const getEntries = (): DiaryEntry[] => {
  return diaries;
};

// Note: TypeScript only checks whether we have all of the required fields or not, but excess fields are not prohibited. Hence, to avoid unwanted behaviour, in this case, leaking the unwanted fields even though our types seem to imply otherwise, we need to exclude the fields ourselves as TypeScript does not modify the actual data but only its type.
const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
};

const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find((diary) => diary.id === id);
  return entry;
};

const addDiary = (entry: NewDiaryEntry): DiaryEntry => {
  const newDiaryEntry = {
    id: Math.max(...diaries.map((diary) => diary.id)) + 1,
    ...entry,
  };

  diaries.push(newDiaryEntry);
  return newDiaryEntry;
};

export default {
  getEntries,
  addDiary,
  getNonSensitiveEntries,
  findById,
};
