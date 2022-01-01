/**
 *
 * Time Complexity is theta(n) becaue we are at most going to length of array
 */
const efficientApproach = (array = []) => {
  let frequency = 1;
  let iterator = 1;
  while (iterator < array.length) {
    while (iterator < array.length && array[iterator] === array[iterator - 1]) {
      frequency += 1;
      iterator += 1;
    }
    //On getting a different number
    console.log(`Frequency Of ${array[iterator - 1]} is ${frequency}`);
    frequency = 1;
    iterator += 1;
  }
  if (array.length === 1 || array[array.length - 1] !== array[array.length - 2]) {
    console.log(`Frequency Of ${array[array.length - 1]} is 1`);
  }
};
export default efficientApproach;
