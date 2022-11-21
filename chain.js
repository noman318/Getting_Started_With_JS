const a = 5;
const b = a.toString().toUpperCase();
console.log(b);
const numbers = [4, 9, 10, 16, 25, 29, 78];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  console.log(value);
  return value > 18;
}
// myFunction();
