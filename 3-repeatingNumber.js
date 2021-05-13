function printRepeating(arr, n) {
  var i, j;
  console.log("Repeated Element is :");
  for (i = 0; i < n; i++) {
    for (j = i + 1; j < n; j++) {
      if (arr[i] == arr[j]) console.log(arr[i]);
    }
  }
}

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10];
//upto 101 result will be same
var n = arr.length;
printRepeating(arr, n);
