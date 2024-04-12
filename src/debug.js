/** FEEDBACK: Great job! */
const brokenLoop = (start, end) => {
  let result = '';
  for (let i = start; i <= end;i++) {
    result += i;
  }
  return result;
};

const brokenNested = () => {
  let result = '';
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 10; j++) {
      result += `-${i}${j}`;
    }
  }
  return result.slice(1);
};

module.exports = {
  brokenLoop,
  brokenNested,
};
