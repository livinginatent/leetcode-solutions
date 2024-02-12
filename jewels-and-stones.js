const jewelsInStones = (jewels, stones) => {
  let count = 0;
  const jewelsArr = jewels.split("");
  const stonesArr = stones.split("");
  for (const ch of stonesArr) {
    if (jewelsArr.includes(ch)) {
      count++;
    }
  }
  return count;
};

jewelsInStones("aA", "aAAbbbb");
