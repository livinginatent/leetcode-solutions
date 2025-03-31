const productExceptSelf = (nums) => {
  const leftArr = [1];
  const rightArr = [];
  let result = [];
  rightArr[nums.length - 1] = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    leftArr.push(leftArr[i] * nums[i]);
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    rightArr[i] = rightArr[i + 1] * nums[i + 1];
  }
  for (let i = 0; i < nums.length; i++) {
    result[i] = leftArr[i] * rightArr[i];
  }
  return result;
};

productExceptSelf([1, 2, 3, 4]);

// nums = [1,2,3,4]
