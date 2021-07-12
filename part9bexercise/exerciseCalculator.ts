import assert from 'assert';

interface argumentResults {
  target: number;
  inputs: Array<number>;
}

interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: 1 | 2 | 3;
  ratingDescription: String;
  target: number;
  average: number;
}

const parseArguments = (args: Array<string>): argumentResults => {
  if (args.length < 4) {
    throw new Error('Too few arguments');
  }
  const inputArguments: Array<number> = args
    .slice(3)
    .map((argument: string) => Number(argument));
  return {
    target: Number(args[2]),
    inputs: inputArguments,
  };
};

const calculateExercises = (
  dailyExerciseHoursArr: Array<number>,
  target: number,
): Result => {
  let periodLength = dailyExerciseHoursArr.length;
  let trainingDays: number = 0,
    success: boolean,
    rating: 1 | 2 | 3,
    ratingDescription: string = "",
    average: number,
    total: number = 0;
  // The calculation
  for (let i = 0; i < dailyExerciseHoursArr.length; i++) {
    if (dailyExerciseHoursArr[i] === 0) {
      continue;
    }
    trainingDays++;
    total += dailyExerciseHoursArr[i];
  }

  average = total / periodLength;
  if (average >= target) {
    success = true;
    rating = 3;
  } else {
    success = false;
    const difference: number = average - target;

    if (difference >= 0) {
      rating = 3;
      ratingDescription = 'Good Job';
    } else if (Math.abs(difference) / target <= 0.5) {
      rating = 2;
      ratingDescription = 'not too bad but could be better';
    } else {
      rating = 1;
      ratingDescription =
        'Please do your best to achieve target as you are currently more than 50% away from target';
    }
  }
  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};

// const result: Result = calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2);
// console.log(result);

// assert.deepStrictEqual(result, {
//   periodLength: 7,
//   trainingDays: 5,
//   success: false,
//   rating: 2,
//   ratingDescription: 'not too bad but could be better',
//   target: 2,
//   average: 1.9285714285714286,
// });

try {
  const { target, inputs } = parseArguments(process.argv);

  console.log(calculateExercises(inputs, target));
} catch (error) {
  console.log(error.message);
}
