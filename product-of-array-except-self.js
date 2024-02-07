const productExceptSelf = (nums) => {
  const leftArr = [];
  const rightArr = [];
  leftArr[0] = 1;
  rightArr[nums.length - 1] = 1;
  const result = [];

  for (let i = 1; i < nums.length; i++) {
    leftArr[i] = leftArr[i - 1] * nums[i - 1];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    rightArr[i] = rightArr[i + 1] * nums[i + 1];
  }
  for (let i = 0; i < nums.length; i++) {
    result[i] = leftArr[i] * rightArr[i];
  }
  return result;
};
