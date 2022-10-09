<h1>Algorithms (JavaScript)</h1>

<h2>**Binary search** </h2>------------------------------------------

Runtime complexity: **O(log n)**

For binary search, the array must be sorted!
 - The function arguments are the array, and the value what's index we are looking for
 - create variable for the first, last and the middle index of the array
 - The actual search part: 
    - The while loop don't stop until the middleIndex not equals to the value AND firstIndex is smaller than the lastIndex
    - If the value is bigger than the middleIndex, the lastIndex will be middleIndex - 1
    - But if the value is smaller than the middleIndex, the firstIndex will be middleIndex + 1
    - The middleIndex is always set to be to the 'middle' of the array after every check
    - If the middleIndex not equals to the value, the function return -1, else it returns the middleIndex (The actual index of the given value
  ```js
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
  ```

<h2>**Selection sort** </h2>------------------------------------------

Runtime complexity: **O(n^2)**

With the first for loop we traverse through the array, and at the same time a nested loop also started to comparing each value to the starting value (beginning with our first loop's initial index.) If we find a lower value, we set that new value as our new lowest value to be compared against, and continue pushing. Each time we traverse through the array and find the next lowest value. It could be done by reverse order too.

  - The function takes an array as argument.
  - The first loop stop at *array.length - 1*, because the nested loop starts by comparing *i* with its neighbour *(i + 1)*