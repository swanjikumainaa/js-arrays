//  find the last element of the following arrays
arr1 = [3,7,34,90,12]
arr2 = [true, "green", "where",12,56]

let lastElement = [arr1.length - 1];
console.log(lastElement)

let lastElementOfArr2 = arr2[arr2.length - 1];
console.log(lastElement)

// Write a JS program that will join the following array elements into a string
myPets = ["Cow", "Python", "Snake", "Dog"];
let result = myPets.join('')

console.log(result)

// Write a JS script to sort the following array items
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];


let sortedArray = arr3.sort()
console.log(sortedArray)

// Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
// var arr = ["apple", "mango", "apple",
            // "orange", "mango", "mango"]; 
let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

let duplicates = [];
let uniqueArr = arr.filter(function(item, index) {
  if (arr.indexOf(item) !== index) {
    duplicates.push(item);
    return false;
  }
  return true;
});

console.log("Array without duplicates:", uniqueArr);
console.log("Array of duplicates:", duplicates);


//Write a JS script to search for the following word in the array.
// 4
// If the word is present, console it else console "the search word was not found"
// let arr5 = ["the", "way", "x", 4, 23];
 let arr5 = ["the", "way", "x", 4, 23];

const index = arr5.indexOf("4");

if (index !== -1) {
  const word = arr5[index];
  console.log(word);
} 
else {
  console.log("the search word was not found");
}

// 6.) 
let word = "lufituaeb"

let wordArray = []

for (let i = 0, n = word.length; i < n; i++) {
    wordArray.push(word[i])
}

sortedWordArray = wordArray.sort()

sortedWord = sortedWordArray.join('')

console.log(sortedWord)
