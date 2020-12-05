function flatten(arr) {
    let resultArr = [];
  
    for (const item of arr) {
      if (item instanceof Array) resultArr = resultArr.concat(flatten(item));
      else resultArr.push(item);
    }
  
    return resultArr;
  }
  
  console.log(flatten([1, 2, 3, [4, 5]]));
  console.log(flatten([1, [2, [3, 4], [[5]]]]));
  console.log(flatten([[1], [2], [3]]));
  console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));