function calculateMean(arr) {
  let total = 0;
  arr.forEach((n) => {
    total += n;
  });
  return total / 2;
}
calculateMean([1, 2, 3, 4, 10]);
