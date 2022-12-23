let bubbleArr = [23, 45, 12, 1, 6, 4, 8, 65];

function bubbleSort(arr) {
  let temp;
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(bubbleArr));
