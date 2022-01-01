export const firstOccurAtRecursive = (
  arr = [],
  low = 0,
  high = arr.length - 1,
  element
) => {
  if (low > high) return -1;
  let middle = parseInt((low + high) / 2);
  if (element > arr[middle]) {
    return firstOccurAt(arr, middle + 1, high, element);
  } else if (element < arr[middle]) {
    return firstOccurAt(arr, low, middle - 1, element);
  } else {
    if (middle === 0 || arr[middle] !== arr[middle - 1]) {
      return middle;
    } else {
      return firstOccurAt(arr, low, middle - 1, element);
    }
  }
};
