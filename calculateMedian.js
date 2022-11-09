function calculateMedian(arr) {
  if (arr.length % 2 === 0) {
    return (
      (arr[Math.floor(arr.length / 2 - 1)] + arr[Math.floor(arr.length / 2)]) /
      2
    );
  } else {
    return arr[Math.round(arr.length / 2 - 1)];
  }
}

console.log(calculateMedian([1, 2, 3, 4]));
console.log(calculateMedian([1, 2, 3, 4, 5]));
