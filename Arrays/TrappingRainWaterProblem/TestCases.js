const trapWaterTestCases = [
  {
    type: "positiveTestCase1",
    input: [2, 0, 2],
    output: 2,
  },
  {
    type: "positiveTestCase2",
    input: [3, 0, 1, 2, 5],
    output: 6, // (3-0)+(3-1)+(3-2)
  },
  {
    type: "positiveTestCase3",
    input: [7, 0, 2, 4, 0, 3, 3],
    output: 9,
  },
  {
    type: "negativeTestCase1",
    input: [1, 8, 10, 30, 40],
    output: 0, //because of sorted order
  },
  {
    type: "negativeTestCase2",
    input: [10, 9, 8, 7, 6, 5, 4, 0],
    output: 0, //because of sorted order
  },
];
export default trapWaterTestCases;
