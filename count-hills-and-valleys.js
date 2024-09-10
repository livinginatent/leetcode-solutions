const countHillsValleys = (nums) => {
  let result = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      let right_side = i + 1;
      while (nums[i] === nums[right_side]) {
        right_side++;
      }
      if (
        (nums[i - 1] < nums[i] && nums[i] > nums[right_side]) ||
        (nums[i - 1] > nums[i] && nums[i] < nums[right_side])
      ) {
        result++;
      }
    }
  }
  console.log(result);
};

// nums = [2,4,1,1,6,5]
countHillsValleys([4, 4, 1, 1, 6, 5]);
