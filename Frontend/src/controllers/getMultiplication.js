import generateMultiplication from "../model/generateMultiplication";
import isNumber from "../utils/number";

const getMultiplication = (number, maxMultiplier) => {
  // console.log(number);
  // console.log(maxMultiplier);

  const isValidNumber = isNumber(number);
  const isValidMaxMultiplier = isNumber(maxMultiplier);

  if (isValidNumber && isValidMaxMultiplier) {
    const resultTable = generateMultiplication(number, maxMultiplier);
    return resultTable;
  } else {
    alert("Please enter valid number...");
  }
};

export default getMultiplication;
