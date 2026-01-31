const isArgsNum = (args) => {
  return [...args].every((arg) => typeof arg === "number");
};

const calculator = {
  add: function (num1, num2) {
    if (!isArgsNum(arguments)) return "Args must be type of number";
    return num1 + num2;
  },
  multiply: function (num1, num2) {
    if (!isArgsNum(arguments)) return "Args must be type of number";
    return num1 * num2;
  },
  subtract: function (num1, num2) {
    if (!isArgsNum(arguments)) return "Args must be type of number";
    return num1 - num2;
  },
  divide: function (num1, num2) {
    if (!isArgsNum(arguments)) return "Args must be type of number";
    return num1 / num2;
  }
};

module.exports = calculator;
