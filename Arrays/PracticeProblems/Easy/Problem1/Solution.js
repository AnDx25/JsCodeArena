function minAdjDiff(arr, n) {
  //your code here
  let minimumDifferene = 9999;
  for (let index = 0; index < n; index++) {
    let currentDifference = Math.abs(arr[index] - arr[(index + 1) % n]);
    minimumDifferene = currentDifference < minimumDifferene ? currentDifference : minimumDifferene;
  }
  return minimumDifferene;
}
console.log(minAdjDiff([8, -8, 9, -9, 10, -11, 12]));
