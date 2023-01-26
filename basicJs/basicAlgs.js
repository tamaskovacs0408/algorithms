let numArr1 = [1, 2, 4, 8, 0, 5, 3, 5];

// Summary(Összegzés) - Add the items of the array

function summary(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// console.log(`Summary of the array: ${summary(numArr1)}.`); // 28

// Counting(Megszámlálás) - How many even numbers are in the array?

function countOfEvens(arr) {
  let even = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even++;
    }
  }
  return even;
}

// Decision (Eldöntés) - Is there 0 in the array?

function isThereZero(arr) {
  let i = 0;
  while (i < arr.length && arr[i] !== 0) {
    i++;
  }
  if (i < arr.length) {
    return "There is 0!";
  } else {
    return "There's no 0!";
  }
}
//console.log(`Van a tömbben 0? - ${isThereZero(numArr1)}`);

// Selection(Kiválasztás) - Return the index of 3

function placeOfElement(arr) {
  let pos = 0;
  while (arr[pos] !== 3) {
    pos++;
  }
  return pos + 1;
}
//console.log(`The place of 3 of the array is ${placeOfElement(numArr1, 3)}`);

// Search - If there's a 0 in the array return it(There is!) and it's index

function toBeAndPos(arr) {
  let num = 0;
  let i = 0;
  while (i < arr.length && arr[i] != num) {
    i++;
  }
  if (i < arr.length) {
    return `There is ${num}, it's index: ${i}.`;
  } else {
    return "Item not found.";
  }
}
// console.log(toBeAndPos(numArr1));

// Copy - Double the elements of the array and copy into the new one.

function doubleNumToNewList(arr) {
  let newArr = [];
  arr.map((n) => {
    newArr.push(n * 2);
  });
  return newArr;
}
function doubleWithFor(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}
// console.log(`(map)Array: ${numArr1}, the elements of the array doubled:${doubleNumToNewList(numArr1)}`);
//console.log(`(for)Array: ${numArr1}, the elements of the array doubled:${doubleWithFor(numArr1)}`);
// Selection(Kiválogatás) - Put the even numbers of the array into a new one.

function evenToNew(arr) {
  let newArr = [];
  arr.map((n) => {
    if (n % 2 === 0) {
      newArr.push(n);
    }
  });
  return newArr;
}
function evenToNewFor(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
//console.log(`(map)Only the even numbers: ${evenToNew(numArr1)}`);
//console.log(`(for)Only the even numbers: ${evenToNew(numArr1)}`);
// Sorting(Szétválogatás) - 3 and smaller numbers into an array, greater than 3 into another array
function sortThrees(arr) {
  let smaller = [];
  let greater = [];
  arr.map((n) => {
    if (n <= 3) {
      smaller.push(n);
    } else {
      greater.push(n);
    }
  });
  return `(map)Kisebb, vagy egyenlő, mint 3: ${smaller}\nNagyobb, mint 3
${greater}`;
}
function sortThreesFor(arr) {
  let smaller = [];
  let greater = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 3) {
      smaller.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return `(for)Kisebb, vagy egyenlő, mint 3: ${smaller}\nNagyobb, mint 3 ${greater}`;
}
//console.log(sortThrees(numArr1));
//console.log(sortThreesFor(numArr1));
// Section(Metszet) - The common elements of two arrays into a new array
let arrA = [1, 43, 4, 8, 9, 20, 3, 5];

let arrB = [99, 43, 2, 117, 97, 20, 10, 5];

function section(arr1, arr2) {
  let common = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        common.push(arr1[i]);
      }
    }
  }
  return common;
}
function sectionMap(arr1, arr2) {
  let common = [];
  arr1.map((n) => {
    arr2.map((m) => {
      if (n === m) {
        common.push(n);
      }
    });
  });
  return common;
}
//console.log(`(for)First array: ${arrA}\nSecond array: ${arrB}\nCommon elements: ${section(arrA,arrB)}`);
//console.log(`(map)First array: ${arrA}\nSecond array: ${arrB}\nCommon elements:${section(arrA, arrB)}`);

// Union - Put the elements of the arrays to a new array, but every element must be in once!
function arrUnion(arr1, arr2) {
  return Array.from(new Set([...arr1, ...arr2]));
}
console.log(`With built in JS: ${arrUnion(arrA, arrB)}`);
function union(arr1, arr2) {
  let unionArr = [];
  for (let i = 0; i < arr1.length; i++) {
    unionArr.push(arr1[i]);
  }
  for (let j = 0; j < arr2.length; j++) {
    let i = 0;
    while (i < arr1.length && arr2[j] !== arr1[i]) {
      i++;
    }
    if (i >= arr1.length) {
      unionArr.push(arr2[j]);
    }
  }
  return unionArr;
}
//console.log(`Union of the arrays: ${arrUnion(arrA, arrB)}`)

//console.log(`Union of the arrays(with the loops): ${union(arrA, arrB)}`);

// Maximum - The maximum element of the array
let numList2 = [99, 43, 2, 117, 1, 43, 4, 8, 9, 20, 3, 5, 97, 20, 10, 5];
// function getMax(arr) {
// return Math.max(...arr);
// }
function getTheMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Minimum - Return the minumum element of the array
function getMinimum(arr) {
  return Math.min(...arr);
}
//console.log(getMinimum(numList2));
function getTheMinimum(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
// console.log(`The minimum element of the array: ${getTheMinimum(numList2)}`);]
