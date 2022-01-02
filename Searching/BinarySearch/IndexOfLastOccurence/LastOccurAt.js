export const lastOccurAt = (
  arr = [],
  low = 0,
  high = arr.length - 1,
  element
) => {
  while (low <= high) {
    let middle = parseInt((low + high) / 2);
    if (arr[middle] > element) {
      high = middle - 1;
    } else if (arr[middle] < element) {
      low = middle + 1;
    } else {
      if (middle == arr.length - 1 || arr[middle] !== arr[middle + 1]) {
        return middle;
      } else {
        low = middle + 1;
      }
    }
  }
  return -1;
};
