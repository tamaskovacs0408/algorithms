function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    let left = [];
    let right = [];
    let newArr = [];
    let pivot = arr.pop();
    let length = arr.length;

    for (let i = 0; i < length; i++) {
      if (arr[i] <= pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return newArr.concat(quickSort(left), pivot, quickSort(right));
  }
}

// console.log(quickSort([3, 0, 2, 5, -1, 4, 1]));