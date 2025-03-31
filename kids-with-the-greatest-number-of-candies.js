const kidsWithCandies = (candies, extraCandies) => {
  const kidWithMost = Math.max(...candies);
  return candies.map((candy) => candy + extraCandies >= kidWithMost);
};
