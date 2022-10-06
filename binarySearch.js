// For binary search, the array must be sorted!
// The function arguments are the array, and the value what's index we looking for
function binarySearch(array, value) {
  // create variable for the first, last and the middle index of the array
  let firstIndex = 0;
  let lastIndex = array.length - 1;
  let middleIndex = Math.floor((firstIndex + lastIndex) / 2);

  /* The actual search method 
    - The while loop don't stop until the middleIndex not equals to the value AND firstIndex is smaller than the lastIndex
    - If the value is bigger than the middleIndex, the lastIndex will be middleIndex - 1
    - But if the value is smaller than the middleIndex, the firstIndex will be middleIndex + 1
    - The middleIndex is always set to be to the 'middle' of the array after every check
    - If the middleIndex npt equals to the value, the function return -1, else it returns the middleIndex (The actual index of the givel value*/
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
