const maxArea = (height) => {
  let max_area = 0;
  let left = 0;
  let right = height.length - 1;
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
  console.log(max_area);
  return max_area;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
