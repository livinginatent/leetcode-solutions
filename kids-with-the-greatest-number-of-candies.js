const kidsWithCandies = (candies, extraCandies) => {
const kidWithMax = Math.max(...candies)
return candies.map((kid)=>kid+extraCandies>=kidWithMax)
};

kidsWithCandies([1,2,34,5],5)