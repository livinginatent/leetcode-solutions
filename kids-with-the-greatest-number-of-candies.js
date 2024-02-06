const kidsWithCandies = (candies, extraCandies) => {
  const result = [];
  const largest = candies.reduce((acc, curr) => {
    return acc > curr ? acc : curr;
  }, candies[0]);
  for (let i = 0; i < candies.length; i++) {
    result.push(candies[i] + extraCandies >= largest);
  }

  return result;
};
