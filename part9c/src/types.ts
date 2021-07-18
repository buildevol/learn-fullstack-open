export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy';

export type Visibility = 'great' | 'good' | 'ok' | 'poor';

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  // We add a postfix ? to comment if we want to be able to save entires without a certain field, in this case, comment.
  comment?: string;
}

// The use of utility types Pick or Omit
// https://www.typescriptlang.org/docs/handbook/utility-types.html
export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;
