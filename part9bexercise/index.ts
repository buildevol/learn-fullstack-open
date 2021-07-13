/* eslint-disable @typescript-eslint/no-unsafe-call */
import express from 'express';
import calculateBmi from './bmiCalculator';
import calculateExercises from './exerciseCalculator';

const PORT = 3002;

const app = express();

app.use(express.json());

interface bmiResult {
  weight: number;
  height: number;
  bmi: string;
}

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  try {
    const height = Number(req.query.height);
    const weight = Number(req.query.weight);
    // As NaN is a number type
    if (isNaN(height) || isNaN(weight)) {
      throw new Error();
    }
    const bmiResult: bmiResult = {
      weight,
      height,
      bmi: calculateBmi(height, weight),
    };
    return res.json(bmiResult);
  } catch (error) {
    return res.status(400).json({
      error: 'malformatted parameters',
    });
  }
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;

  if (!daily_exercises || !target) {
    res.status(400).json({
      error: 'parameters missing',
    });
  }

  if (
    typeof target !== 'number' ||
    Array.isArray(daily_exercises) ||
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    !daily_exercises.some(isNaN)
  ) {
    res.status(400).json({
      error: 'malformatted parameters',
    });
  }

  res.json(calculateExercises(daily_exercises, target));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
