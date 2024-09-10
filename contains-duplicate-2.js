const containsNearbyDuplicate = (nums, k) => {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] !== undefined) {
      if (Math.abs(nums[i] - i) <= k) {
        return true;
      }
    } else {
      obj[nums[i]] = i;
    }
  }

  return false;
};
// nums = [1,2,2,3,1]

containsNearbyDuplicate([1, 2, 3, 1], 3);

// 1:0,
// 2:1,
// 3:2,
// 1:3,
