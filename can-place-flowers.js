const canPlaceFlowers = (flowerbed, n) => {
  let prev = -1;
  let next = 1;
  let count = 0;
  const getValue = (arr, i) => {
    if (i < 0 || i >=arr.length) {
      return 0;
    }
    return arr[i];
  };
  for (let i = 0; i < flowerbed.length; i++, prev++, next++) {
    if (
      getValue(flowerbed, prev) +
        getValue(flowerbed, i) +
        getValue(flowerbed, next) ===
      0
    ) {
      flowerbed[i] = 1;
      count++;
    }
  }
  return count >= n;
};

// arr = [1,0,0,0,1,0,0,1]
