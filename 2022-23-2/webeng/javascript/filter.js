const numbers = [3, 5, -3, -5, 1, -2];

function filter(arr, fn) {
  const result = [];
  for (const number of arr) {
    if (fn(number)) {
      result.push(number);
    }
  }
  return result;
}

console.log( filter(numbers, e => e < 0) );
console.log( filter(numbers, e => e > 0) );
console.log( filter(numbers, e => e % 2 === 0) );
console.log( numbers.filter(e => e % 2 === 0) );

const books = [
  { title: "Romeo and Juliet", author: "Shakespeare"},
  { title: "Romeo and Juliet", author: "Shakespeare"},
  { title: "Romeo and Juliet", author: "Shakespeare"},
  { title: "Romeo and Juliet", author: "Shakespeare"},
  { title: "Romeo and Juliet", author: "Shakespeare"},
];