const findNonMinOrMax = (nums) => {
  const max = Math.max(...nums);
  const min = Math.min(...nums);
  const newArr = nums.filter((num) => num !== max && num !== min);
  if (newArr.length) {
    return newArr[0];
  }
  return -1;
};

findNonMinOrMax([1, 2, 3, 5]);
