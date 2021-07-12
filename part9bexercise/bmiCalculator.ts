const calculateBmi = (height: number, weight: number): string => {
    const bmi: number = weight / Math.pow(height / 100, 2);

    if (bmi > 30) {
        return "Obese (Obese)"
    } else if (bmi >= 25) {
        return "Overweight (over weight)"
    } else if (bmi >= 18.5) {
        return "Normal (healthy weight)"
    } else {
        return "Underweight (under weight)"
    }
};

console.log(calculateBmi(180, 74));
