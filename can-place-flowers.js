const canPlaceFlowers = (flowerbed, n) => {
  let prev = -1;
  let next = 1;
  let count = 0;

  const getValue = (array, i) => {
    if (i < 0 || i >= array.length) {
      return 0;
    }
    return array[i];
  };
  for (let i = 0; i < flowerbed.length; i++, prev++, next++) {
    if (
      getValue(flowerbed, prev) +
        getValue(flowerbed, i) +
        getValue(flowerbed, next) ==
      0
    ) {
      flowerbed[i] = 1;
      count++;
    }
  }
  return count >= n;
};
