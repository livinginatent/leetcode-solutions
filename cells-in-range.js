var cellsInRange = function (s) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const arr = s.split(":");
  console.log(arr);
  const startingCol = arr[0][0];
  const endingCol = arr[1][0];
  const numbers = arr
    .map((item) => item.split("").filter((item) => !isNaN(item)))
    .map((item) => item.join(""));

  const startingRow = Number(numbers[0]);
  const endingRow = Number(numbers[1]);
  const newCols = alphabet.slice(
    [alphabet.indexOf(startingCol)],
    [alphabet.indexOf(endingCol) + 1]
  );

  const newNumbers = [];
  if (startingRow < endingRow) {
    for (let i = startingRow; i <= endingRow; i++) {
      newNumbers.push(i);
    }
  } else if (startingRow === endingRow) {
    newNumbers.push(startingRow);
  }

  const newSheet = [];
  for (let i = 0; i < newCols.length; i++) {
    for (let j = 0; j < newNumbers.length; j++) {
      newSheet.push(newCols[i] + newNumbers[j]);
    }
  }
   return newSheet;
};

cellsInRange("A1:B1");
