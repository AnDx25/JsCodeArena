export const firstOccurAtIterative = (
  arr = [],
  low = 0,
  high = arr.length - 1,
  element
) => {
  while (low <= high) {
    let middle = parseInt((low + high) / 2);
    if (arr[middle] === element) {
      if (middle === 0 || arr[middle - 1] !== arr[middle]) {
        return middle;
      } else {
        high = middle - 1;
      }
    } else if (arr[middle] > element) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
  return -1;
};
