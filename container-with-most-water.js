const maxArea = (height) => {
  let left = 0;
  let right = height.length - 1;
  let max_area = 0;
  while (left < right) {
    max_area = Math.max(
      max_area,
      Math.min(height[left], height[right]) * (right - left)
    );
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max_area;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);

//height = [1,8,6,2,5,4,8,3,7]
