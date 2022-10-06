function binarySearch(array, value) {
  let firstIndex = 0;
  let lastIndex = array.length - 1;
  let middleIndex = Math.floor((firstIndex + lastIndex) / 2);

    while(array[middleIndex] !== value && firstIndex < lastIndex)
    {
      if (value < array[middleIndex])
        {
            lastIndex = middleIndex - 1;
        } 
      else if (value > array[middleIndex])
        {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((firstIndex + lastIndex) / 2);
    }
  return (array[middleIndex] !== value) ? -1 : middleIndex;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 4))
