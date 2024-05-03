const maxArea = (height) => {
  let max_area = 0
  let left = 0
  let right = height.length-1
  while(left<right){
    max_area = Math.max(max_area,(right-left)*Math.min(height[left],height[right]))
    if(height[left]<height[right]){
        left++
    }else{
        right--
    }
  }
  return max_area
}

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
