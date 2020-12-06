function capitalizeWords(arr) {
    const result = [];
  
    if (!arr.length) return result;
  
    result.push(arr[0].toUpperCase());
  
    return [...result, ...capitalizeWords(arr.slice(1))];
  }
  
  const words = ['i', 'am', 'learning', 'recursion'];
  console.log(capitalizeWords(words));