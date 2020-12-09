function binarysearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : "Number not found";
}
console.log(
  binarysearch([10, 6, 10, 14, 18, 30, 37, 40, 44, 79, 84, 86, 98, 99], 10)
);
console.log(
  binarysearch([5, 10, 16, 34, 37, 40, 44, 64, 84, 86, 95, 98, 99], 95)
);
console.log(
  binarysearch([5, 6, 13, 14, 18, 64, 79, 84, 86, 95, 96, 98, 99], 100)
);
