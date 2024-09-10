var sortPeople = function (names, heights) {
  const people = names.map((name, index) => ({ name, height: heights[index] }));
  people.sort((a, b) => b.height - a.height);
  return people.map(person => person.name);
};

//names = ["Mary","John","Emma"], heights = [180,165,170]

sortPeople(["Mary", "John", "Emma"], [180, 165, 170]);
