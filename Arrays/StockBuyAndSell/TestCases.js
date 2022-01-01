const testCases = [
  {
    type: "positiveTestCase1",
    input: [1, 5, 3, 8, 12],
    output: 13,
  },
  {
    type: "positiveTestCase2",
    input: [30, 20, 10],
    output: 0,
  },
  {
    type: "positiveTestCase3",
    input: [10, 20, 30],
    output: 20, //30-10
  },
  {
    type: "positiveTestCase4",
    input: [1, 5, 3, 1, 2, 8],
    output: 11, //(5-1)+(2-1)+(8-2)
  },
];
export default testCases;
