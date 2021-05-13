var getMaxLength = (arr, n) => {
  var count = 0;
  var result = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] == 0) {
      count = 0;
    } else {
      count++;
    }
    if (count > result) {
      result = count;
    }
  }
  return result;
};
var arr = [1, 0, 0, 0, 0, 1, 0, 0, 0, 1];
var n = arr.length;
console.log(getMaxLength(arr, n));
