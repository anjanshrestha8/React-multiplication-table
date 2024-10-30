const colorFunction = (result) => {
  if (result % 10 === 0) return "border-red";
  if (result % 2 === 0) return "border-green";
  else return "border-blue";
};

export default colorFunction;


