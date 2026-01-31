const sort = (arr) => {
  return arr.sort((a, b) => a - b);
};
const getMin = (arr) => {
  return sort(arr)[0];
};
const getMax = (arr) => {
  const lastInd = getLength(arr) - 1;
  return sort(arr)[lastInd];
};
const getAverage = (arr) => {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
};
const getLength = (arr) => arr.length;

const analyzeArray = (arr) => {
  const numbOfArr = arr.filter((elem)=> typeof elem === 'number')

  return {
    average: getAverage(numbOfArr),
    min: getMin(numbOfArr),
    max: getMax(numbOfArr),
    length: getLength(numbOfArr)
  };
};

module.exports = analyzeArray