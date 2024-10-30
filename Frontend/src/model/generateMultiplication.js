const generateMultiplication = (number, maxMultiplier) => {
  // console.log(number);
  // console.log(maxMultiplier);
  const table = [];
  for (let i = 1; i <= maxMultiplier; i++) {
    const result = number * i;
    table.push({ number: number, multiplier: i, result: result });
  }
  // console.log(table)
  return table;
};

export default generateMultiplication;
