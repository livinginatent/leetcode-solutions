var longestDiverseString = function (a, b, c) {
  // Priority queue to keep the characters sorted by count
  const pq = [];
  if (a > 0) pq.push([a, "a"]);
  if (b > 0) pq.push([b, "b"]);
  if (c > 0) pq.push([c, "c"]);
  pq.sort((a, b) => b[0] - a[0]);
  let result = "";
  while (pq.length > 0) {
    let [count1, ch1] = pq.shift();
    if (
      result.length >= 2 &&
      result[result.length - 1] === ch1 &&
      result[result.length - 2] === ch1
    ) {
      if (pq.length === 0) break;
      let [count2, ch2] = pq.shift();
      result += ch2;
      if (--count2 > 0) pq.push([count2, ch2]);
      pq.push([count1, ch1]);
    } else {
      result += ch1;
      if (--count1 > 0) pq.push([count1, ch1]);
    }
    pq.sort((a, b) => b[0] - a[0]);
  }
  console.log(result)
  return result;
};

longestDiverseString(1, 1, 7);
