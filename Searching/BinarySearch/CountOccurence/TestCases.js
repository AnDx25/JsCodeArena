export const testCases = [
  {
    type: "positive",
    index: 1,
    inputArray: [1, 10, 10, 10, 20, 20, 40],
    element: 20,
    output: 2,
  },
  {
    type: "positive",
    index: 2,
    inputArray: [15, 15, 15],
    element: 15,
    output: 3,
  },
  {
    type: "positive",
    index: 3,
    inputArray: [15, 20, 25],
    element: 15,
    output: 1,
  },
  {
    type: "negative",
    index: 1,
    inputArray: [10, 20, 30],
    element: 15,
    output: 0,
  },
];
