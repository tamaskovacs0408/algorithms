<h1>Algorithms (JavaScript)</h1>

<h2>Binary search</h2>

Runtime complexity: **O(log n)**

For binary search, the array must be sorted!

- The function arguments are the array, and the value what's index we are looking for
- create variable for the first, last and the middle index of the array
- The actual search part:
  - The while loop don't stop until the `middleIndex` not equals to the value AND `firstIndex` is smaller than the `lastIndex`
  - If the value is bigger than the `middleIndex`, the `lastIndex` will be `middleIndex - 1`
  - But if the value is smaller than the `middleIndex`, the `firstIndex` will be `middleIndex + 1`
  - The `middleIndex` is always set to be to the 'middle' of the array after every check
  - If the `middleIndex` not equals to the value, the function return `-1`, else it returns the `middleIndex` (The actual index of the given value

```js
function binarySearch(array, value) {
  let firstIndex = 0;
  let lastIndex = array.length - 1;
  let middleIndex = Math.floor((firstIndex + lastIndex) / 2);

  while (array[middleIndex] !== value && firstIndex < lastIndex) {
    if (value < array[middleIndex]) {
      lastIndex = middleIndex - 1;
    } else if (value > array[middleIndex]) {
      firstIndex = middleIndex + 1;
    }
    middleIndex = Math.floor((firstIndex + lastIndex) / 2);
  }
  return array[middleIndex] !== value ? -1 : middleIndex;
}
```

<h2>Selection sort</h2>

Runtime complexity: **O(n^2)**

With the first for loop we traverse through the array, and at the same time a nested loop also started to comparing each value to the starting value (beginning with our first loop's initial index.) If we find a lower value, we set that new value as our new lowest value to be compared against, and continue pushing. Each time we traverse through the array and find the next lowest value. It could be done by reverse order too.

- The function takes an array as argument
- The first loop stop at `array.length - 1`, because the nested loop starts by comparing `i` with its neighbour `(i + 1)`
- Create `minIndex` variable for the current smallest element of the array. It sets `i` as a temporary measure
- The second (nested) loop set to compare the values
  - If the `j` (`i + 1`) is smaller than the `minIndex` (`i`), the `minIndex` value is change to `j` (They're swapping)
  - After the loop completes (the lowest value found in the unsorted section of the array) we swap into it's proper place `[a, b] = [b, a]` syntax.
- At the end we return the (sorted) array

```js
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return array;
}
```

<h2>Insertion sort</h2>

Runtime complexity: **O(n^2)**
_Efficient for small data sets_

As we move through the array, each value will be compared to the previous and swapping places with each one until it will be at its proper place.

- The function takes an array as argument
- The `for` loop iterates through the entire array (forward)
- The loop starts at index 1 (instead of 0), because we compare each element to the previous to see if the swapping is necessary
- Create `j` variable and set it to `i` value
- The `while` loop traverse _backward_ the array. It runs until `j > 0` and `array[j] < array[j - 1]` (value of array[j] is less than array[j] - 1)
- It swaps values until the starting element has been inserted into its proper place
- The function returns the (sorted) array

```js
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      [array[j - 1], array[j]] = [array[j], array[j - 1]];
      j--;
    }
  }
  return array;
}
```

<h2>Bubble sort</h2>

Runtime complexity: **O(n^2)**
Space complexity: **O(n)**
_Least efficient_

The algorithm repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.
The only advantage of bubble sorting is its checking if an array is sorted.

- Function takes an array as argument
- Create `isSorted` variable and set it to `false`
- The `while` loop is running until `!isSorted`
- Every time the loop begins, `isSorted` is set to `true`
- Insert a `for` loop with 0 index start, and length - 1 end
- Compares every element to the next element (i + 1)
- With the end of the loop set the `isSorted` back to `false`
- Return the (sorted) array

```js
function bubbleSort(array) {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        isSorted = false;
      }
    }
  }
  return array;
}
```

<h2>Merge sort</h2>

<h5>Divide and conquer algorithm</h5>

- Divide: Dividing problems into subproblems
- Conquer: recursively process subproblems until each one is solved
- Combine: combine solved subproblems to give a solution into the original problem

Time complexity: **O(nLog)**

Merge sort is recursively dividing an array into two halves, sorting and then merging them.

The algorithm has two parts(two functions): mergeSort(separate the arrays) and merge(merge the separated arrays).

1. mergeSort:
   - Takes an array as argument
   - If the array contains only one element, returns the array
   - Declare 3 variables:
     1. `middle` for the middle element of the array
     2. `left` for the "left side" of the separated array (from the first element to the middle element)
     3. `right` for the "right side" of the separated array (from the middle element to the end of the array)
   - Return the sorted arrays with recursion
2. merge:
   - Merge function is a callback function. Takes two arguments from the mergeSort, `left` and `right`(The two 'sides' of the separated array)
   - Declares 3 variables, `result` as an empty array, `leftIndex` and `rightIndex` both set to `0`
   - 

```js
function mergeSort(array) {
  if (array.length === 1) return array;

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
```
