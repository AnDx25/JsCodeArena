const testCases = [
  {
    type: "positiveTestCase1",
    input: [1, 1, 0, 0, 1],
    output: ["From 2 to 4"],
  },
  {
    type: "positiveTestCase2",
    input: [1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1],
    output: ["From 1 to 3", "From 5 to 6"],
  },
  {
    type: "negativeTestCase1",
    input: [1, 1, 1],
    output: [],
  },
];
