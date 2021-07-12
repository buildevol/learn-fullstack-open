interface argumentResults {
  value1: number;
  value2: number;
}

const parseArguments = (args: Array<string>): argumentResults => {
  if (args.length > 4) {
    throw new Error('Too many arguments');
  } else if (args.length < 4) {
    throw new Error('Too few arguments');
  }

  return {
    value1: Number(args[2]),
    value2: Number(args[3]),
  };
};

const calculateBmi = (height: number, weight: number): string => {
  const bmi: number = weight / Math.pow(height / 100, 2);

  if (bmi > 30) {
    return 'Obese)';
  } else if (bmi >= 25) {
    return 'Overweight';
  } else if (bmi >= 18.5) {
    return 'Normal (healthy weight)';
  } else {
    return 'Underweight';
  }
};

// console.log(calculateBmi(180, 74));
try {
  const { value1, value2 } = parseArguments(process.argv);

  console.log(calculateBmi(value1, value2));
} catch (error) {
  console.log(error.message);
}
