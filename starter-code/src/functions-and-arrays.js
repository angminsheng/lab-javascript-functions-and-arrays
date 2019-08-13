// Find the maximum

// Using if...else statment to return the larger number

function maxOfTwoNumbers(numberA, numberB) {
  if (numberA > numberB) return numberA;
  else return numberB;
}

// Second approach using Math.max() that returns the biggest number

// function maxOfTwoNumbers(numberA, numberB) {
//   return Math.max(numberA, numberB);
// }

// Finding Longest Word
var words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot"
];

// Using a for loop to find the longest word

function findLongestWord(wordsArray) {
  // if the array is empty the function returns null
  if (wordsArray.length === 0) return null;
  // Initialize the longestWord with the first element in the wordsArray
  let longestWord = wordsArray[0];
  // Loop through the array and replace the longestWord if the length of the word is longer than the longestWord
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length > longestWord.length) longestWord = wordsArray[i];
  }
  return longestWord;
}

// Using reduce to find longest word

// function findLongestWord(wordsArray) {
//   if (wordsArray.length === 0) return null;

//   return wordsArray.reduce(function(acc, val) {
//     if (val.length > acc.length) return val;
//     else return acc;
//   });
// }

// Calculating a Sum

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// using a for loop to calculate sum of array.

function sumArray(numbersArray) {
  // initialize the sum to 0
  let sum = 0;
  // loop through the array to add each number to the sum
  for (let i = 0; i < numbersArray.length; i++) {
    // equivalent to sum = sum + numbersArray[i]
    sum += numbersArray[i];
  }
  return sum;
}

// using reduce to calculate sum of array
// function sumArray(numbersArray){
//   return numbersArray.reduce(function(acc,val){
//     return acc+val
//   })
// }

// Calculate the Average

var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

// Array of Strings
var wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace"
];

function averageNumbers(numbersArray) {
  if (numbersArray.length === 0) return null;
  // the average of number the array is equal to sum of number divided by length of the array
  return sumArray(numbersArray) / numbersArray.length;
}

//calculate average word length using a for loop

function averageWordLength(wordsArray) {
  if (wordsArray.length === 0) return null;

  let totalWordLength = 0;
  let numberOfWords = wordsArray.length;

  for (let i = 0; i < wordsArray.length; i++) {
    totalWordLength += wordsArray[i].length;
  }

  return totalWordLength / numberOfWords;
}

// using reduce to calculate average word length

// function averageWordLength(wordsArray) {
//   if (wordsArray.length === 0) return null;

//   return (
//     wordsArray.reduce(function(acc, val) {
//       // we initialize the accumulator to 0 and add the length of each element to the accumulator
//       return acc + val.length;
//     }, 0) / wordsArray.length
//   );
// }

// Unique Arrays
var wordsUnique = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring"
];

function uniquifyArray(wordsArray) {
  if (wordsArray.length === 0) return [];
  // create empty array to store unique element
  let uniqueArray = [];
  // loop through the element and push unique element into the array
  for (let i = 0; i < wordsArray.length; i++) {
    // indexOf returns the first element that matches the search. If the element appears more than once, the return value of indexOf will not match the actual index of the element as indexOf will always return the first instance of the element in the array.
    if (wordsArray.indexOf(wordsArray[i]) === i) {
      uniqueArray.push(wordsArray[i]);
    }
  }

  return uniqueArray;
}

// Finding Elements
var wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience"
];

function doesWordExist(wordsArray, searchedWord) {
  let wordExist = false;
  // loop through the array and set wordExist to true if element matches the searchedWord
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === searchedWord) wordExist = true;
  }

  return wordExist;
}

// Counting Repetion
var wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter"
];

function howManyTimes(wordsArray, searchedWord) {
  if (wordsArray.length === 0) return false;

  let count = 0;
  // loop through the element and increase the count by 1 each time the element matches the searchedWord
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === searchedWord) count += 1;
  }

  return count;
}

// Bonus Quest

var matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49,
    49,
    99,
    40,
    17,
    81,
    18,
    57,
    60,
    87,
    17,
    40,
    98,
    43,
    69,
    48,
    4,
    56,
    62,
    0
  ],
  [
    81,
    49,
    31,
    73,
    55,
    79,
    14,
    29,
    93,
    71,
    40,
    67,
    53,
    88,
    30,
    3,
    49,
    13,
    36,
    65
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22,
    31,
    16,
    71,
    51,
    67,
    63,
    89,
    41,
    92,
    36,
    54,
    22,
    40,
    40,
    28,
    66,
    33,
    13,
    80
  ],
  [
    24,
    47,
    32,
    60,
    99,
    3,
    45,
    2,
    44,
    75,
    33,
    53,
    78,
    36,
    84,
    20,
    35,
    17,
    12,
    50
  ],
  [
    32,
    98,
    81,
    28,
    64,
    23,
    67,
    10,
    26,
    38,
    40,
    67,
    59,
    54,
    70,
    66,
    18,
    38,
    64,
    70
  ],
  [
    67,
    26,
    20,
    68,
    2,
    62,
    12,
    20,
    95,
    63,
    94,
    39,
    63,
    8,
    40,
    91,
    66,
    49,
    94,
    21
  ],
  [
    24,
    55,
    58,
    5,
    66,
    73,
    99,
    26,
    97,
    17,
    78,
    78,
    96,
    83,
    14,
    88,
    34,
    89,
    63,
    72
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16,
    39,
    5,
    42,
    96,
    35,
    31,
    47,
    55,
    58,
    88,
    24,
    0,
    17,
    54,
    24,
    36,
    29,
    85,
    57
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19,
    80,
    81,
    68,
    5,
    94,
    47,
    69,
    28,
    73,
    92,
    13,
    86,
    52,
    17,
    77,
    4,
    89,
    55,
    40
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88,
    36,
    68,
    87,
    57,
    62,
    20,
    72,
    3,
    46,
    33,
    67,
    46,
    55,
    12,
    32,
    63,
    93,
    53,
    69
  ],
  [
    4,
    42,
    16,
    73,
    38,
    25,
    39,
    11,
    24,
    94,
    72,
    18,
    8,
    46,
    29,
    32,
    40,
    62,
    76,
    36
  ],
  [
    20,
    69,
    36,
    41,
    72,
    30,
    23,
    88,
    34,
    62,
    99,
    69,
    82,
    67,
    59,
    85,
    74,
    4,
    36,
    16
  ],
  [
    20,
    73,
    35,
    29,
    78,
    31,
    90,
    1,
    74,
    31,
    49,
    71,
    48,
    86,
    81,
    16,
    23,
    57,
    5,
    54
  ],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct(matrix) {
  // here is an image to help visualize the approach https://res.cloudinary.com/dvaul5gwx/image/upload/v1565707972/Screenshot_2019-08-13_at_4.51.50_PM.png

  // a matrix is a rectangular array arranged in rows and columns

  // the greatest product can be formed by 4 subsequent element horizontally of 4 subsequent element vertically.
  // We can use a nested for loop to find the greatest product both horizontally and vertically and return the greater number between the two numbers.

  let greatestHorizontalProduct = 0;
  let greatestVerticalProduct = 0;

  // finding the greatest horizontal product
  for (let column = 0; column < matrix.length; column++) {
    // the row is limited to smaller than matrix.length[0]-3 due to the edge cases, to calculate product of 4 subsequent element, we need to make sure the last starting element still has 3 subsequent element.
    for (let row = 0; row <= matrix[0].length - 4; row++) {
      let rowProduct =
        matrix[column][row] *
        matrix[column][row + 1] *
        matrix[column][row + 2] *
        matrix[column][row + 3];

      // if the row product is greater than the greatestHorizontalProduct, replace the value with the row product
      if (rowProduct > greatestHorizontalProduct)
        greatestHorizontalProduct = rowProduct;
    }
  }

  for (let column = 0; column <= matrix[0].length - 4; column++) {
    // the column is limited to smaller than matrix.length[0]-3 due to the edge cases, to calculate product of 4 subsequent element, we need to make sure the last starting ele
    for (let row = 0; row < matrix; row++) {
      let columnProduct =
        matrix[column][row] *
        matrix[column + 1][row] *
        matrix[column + 2][row] *
        matrix[column + 3][row];

      if (columnProduct > greatestVerticalProduct)
        greatestVerticalProduct = columnProduct;
    }
  }

  return Math.max(greatestHorizontalProduct, greatestVerticalProduct);
}
