const score = (s) => {
  let res = 0;

  console.log(s.charCodeAt());
  for (let i = 0; i < s.length - 1; i++) {
    res += Math.abs([s.charCodeAt(i)] - [s.charCodeAt(i + 1)]);
  }
  console.log(res);
};

score("hello");
