const moveZeroes = (nums) => {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      nums[left] = nums[right];
      left++;
    }
  }
  nums
};
moveZeroes([0, 1, 0, 3, 12]);
