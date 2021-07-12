import express from 'express';
import calculateBmi from './bmiCalculator';

const PORT = 3002;

const app = express();

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
