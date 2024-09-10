const addTwoPromises = async (promise1, promise2) => {
  return Promise.all([promise1, promise2]).then((res) =>
    res.reduce((acc, curr) => acc + curr)
  );
};

addTwoPromises(
  new Promise((resolve) => setTimeout(() => resolve(2), 20)),
  new Promise((resolve) => setTimeout(() => resolve(5), 60))
);
