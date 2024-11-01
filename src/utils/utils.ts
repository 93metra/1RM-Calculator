export const percentageCalc = (number: number, percentage: number) => {
  return ((number * percentage) / 100).toFixed(1);
};