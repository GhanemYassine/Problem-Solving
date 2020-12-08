function search(arr, nbr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === nbr) return i;
  }
  return false;
}
console.log(search([1, 2, 3, 4, 5], 1));
console.log(search([10, 15, 20, 25, 30], 15));
console.log(search([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4));
console.log(search([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10));
