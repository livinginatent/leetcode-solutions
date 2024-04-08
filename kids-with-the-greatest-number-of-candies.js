const kidsWithCandies = (candies, extraCandies) => {
  const largest = Math.max(...candies);
  return candies.map((candy) => candy + extraCandies >= largest);
};
